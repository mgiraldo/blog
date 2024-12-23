---
id: 944
title: 'Using Travis-CI with Github Pages to build a self-updating static site'
date: '2015-10-25T15:30:14+00:00'
author: blog
layout: post
permalink: /2015/10/25/using-travis-ci-with-github-pages-to-build-a-self-updating-static-site/
categories:
    - general
    - programación
    - web
---

Recently I came across a project where one collaborator was generating CSV files that would then used to produce static minisite with an ElasticSearch-powered search. I decided to use [Github Pages](https://pages.github.com/) and Travis-CI for two main reasons:

- a simple `git push` would let anyone update the site any time
- Travis-CI could take care of static file generation and search indexing whenever a new set of CSVs was deployed

If you have a similar need, read on. This post is informed by many blog posts around the web (see footnotes<sup id="fnref-944-1">[1](#fn-944-1)</sup> <sup id="fnref-944-2">[2](#fn-944-2)</sup> <sup id="fnref-944-3">[3](#fn-944-3)</sup> <sup id="fnref-944-4">[4](#fn-944-4)</sup>).

**NOTE:** This is not a recommendation on how to produce static sites. There are better tools out there for that. Check out [StaticSiteGenerators](https://staticsitegenerators.net/) if you need a proper system for static site generation. This tutorial is more the README I wish I found in the web while looking to solve this particular problem.

## About Travis-CI and Github Pages

[Github Pages](https://pages.github.com/) is a quick and easy way to host static websites (you do need to know [`git`](http://git-scm.com/) and a Github account, but you already do, right?).

[Travis-CI](https://travis-ci.org/) is a service that lets you trigger arbitrary code whenever you push changes to a code repository. The most popular use is code-testing. We will use the free version that requires your repository to be public. Take this into account if you require your code to be private.

In this example we will use Travis-CI to execute some Python code in the repository which takes care of indexing, static file-generation and repository updates. The project in question has two branches: the mandatory `gh-pages` branch, which Github will use for hosting the static site, and a `csv` branch to which will receive the latest CSVs. The `gh-pages` branch will be updated every time a new `push` arrives in the `csv` branch.

Suppose a basic structure of the project like this:

```
.travis.yml
index.html
csv/data.csv
    static.txt
python/indexer.py
        build.sh
        requirements.txt
javascripts/...
images/...
css/...

```

`indexer.py` will update the ElasticSearch index using `data.csv`, and also generate `static.txt` as a sort of pre-caching of the site. This may sound a little roundabout but bear with me. This structure was actually useful in our case. I will eventually publish the final site.

You will also notice a `/python/build.sh` file. This file contains the steps you use to create the index and static file manually. It is basically the list of UNIX commands you would type in your terminal to do the process yourself, only that you want Travis-CI to do it for you (magick!).

## Setup permissions

Your Github account needs to allow Travis-CI some operations in your repositories.

**NOTE:** Make sure you consult others on security. I am not an expert on this subject. Refer to the footnotes for more details. I will just cover the basics.

In Github:

- Click on your avatar in the top-right and select `Settings > Personal access tokens`
- Generate a new token with [these permissions](http://docs.travis-ci.com/user/github-oauth-scopes/): `user:email`, `read:org`, `repo_deployment`, `repo:status`, `write:repo_hook`, `public_repo`
- **IMPORTANT:** Save the token somewhere you can easily retrieve it because Github shows it only once

In Travis-CI:

- Install the Travis Ruby gem in your machine and login:

```
gem install travis
travis login

```

- Go to [your Travis-CI profile](https://travis-ci.org/profile) and turn on the repository you want to activate
- Click the little gear icon to access the settings for that repo
- Add any environment variables that your scripts use such as the URL to your ElasticSearch service or the `path/to/some/file` in the repository

Let’s look at a trimmed-down (useless) version of the Python `indexer.py` file (the `# comments` in the code will clarify the main parts):

```
#!/usr/bin/python

import csv
import os
# elasticsearch and elasticsearch_dsl are not in python by default
from elasticsearch import Elasticsearch
from elasticsearch import helpers
from elasticsearch_dsl import connections, Index, DocType, Nested, String, GeoPoint, Integer

...

# now an example function that uses an environment variable
def process_csv(filename):
    basepath = os.environ['BASEPATH']
    readpath = basepath+filename
    print "loaded " + readpath
    response = open(readpath)
    reader = csv.DictReader(response)
    # down here some code to index
    # also produce some flat static.txt file


...

# note the presence of prints
def main():
    process_csv("data.csv")

if __name__ == "__main__":
    main()

```

The file has two purposes:

1. index the CSV in the ElasticSearch
2. produce a `csv/static.txt`

## The post-deploy script

You may have noticed a `requirements.txt` file above. Vanilla Python in Travis-CI does not have every module by default. We need this file to tell Travis what to install once the repository is deployed. You can add as many modules as you want, these are just examples:

```
# requirements.txt
elasticsearch==1.7.0
elasticsearch-dsl==0.0.8

```

Now let’s look at the `build.sh` file. This is where the magic happens! This is also where the token we created above enters the scene. We will encrypt it in a minute.

But first:

Travis-CI requires a `.travis.yml` file (you might have noticed it in the root folder, next to `index.html`) that describes what happens once a new deploy is detected. Let’s start with the basic structure (once again, the `# comments` will clarify):

```
language: python
branches:
  except:
  - gh-pages # pushes to this branch will be ignored
  only:
  - csv # pushes to this branch will activate travis-ci
python:
- '2.7' # the python version required
install:
- pip install -r ./python/requirements.txt # to install the needed extra modules

```

Once we have that file, we can add the encrypted Github token using the following command:

```
travis encrypt GH_TOKEN="whatever_github_generated" --add

```

The `--add` flag will append the encrypted string to the `.travis.yml` file like so:

```
language: python
branches:
  except:
  - gh-pages
  only:
  - csv
python:
- '2.7'
install:
- pip install -r ./python/requirements.txt
env:
  global:
  - secure: encrypted-stuff-here

```

Note the new `env > global > secure` structure in the above snippet where the Travis-CI command-line program inserted some `encrypted-stuff-here` automatically.

This creates a new environment variable named `GH_TOKEN` available to any scripts run by Travis-CI (similar to adding the variable in the settings panel but in a more secure way). We will also add a variable for the repository name. You may want to encrypt it also but I will leave it plain text for example purposes:

```
env:
  global:
  - GH_REPO="myaccount/myrepo"
  - secure: encrypted-stuff-here

```

Now we need to create the build script itself, `python/build.sh`. The steps are:

1. `clone` the repository to a new folder (I had to do it this way because the scope in Travis-initiated processes seems to be limited to a single branch and I was not able to pull/push to other branches)
2. `checkout` and `pull` the latest code in the `csv` branch
3. `checkout` and `merge` the code into the `gh-pages` branch
4. run the indexing and output new static files
5. `add` the new files and create a new `commit`
6. `push` the result to `gh-pages`

Below is a condensed version of this script. The `echos` (and all other terminal-visible commands in your scripts such as `print`) will be visible in the [Travis console](https://travis-ci.org/) so you can debug what may be going wrong:

```
#!/bin/bash

export REPO_URL="https://$GH_TOKEN@github.com/$GH_REPO.git"

git config --global user.name "travis-bot"
git config --global user.email "travis"

echo "Clone to the new folder"
git clone $REPO_URL _cloned

cd _cloned

echo "Getting csv branch"
git checkout origin csv

echo "Pulling"
git pull origin csv

echo "Checkout of gh-pages"
git checkout -b gh-pages origin/gh-pages

echo "Merging"
git merge csv -m "merge from travis-ci"

echo "Run the index"
python ./python/index_builder.py

echo "Checking status"
git status

echo "Adding new files in /csv folder"
git add csv

git commit -m "new deploy from travis-ci"

echo "Push"

git push origin gh-pages

```

Now we need to tell Travis-CI to add executable permissions to this file and run it in the `install` part of [the build lifecycle](http://docs.travis-ci.com/user/customizing-the-build/). We also add `before_install` and `script` sections to `.travis.yml`. The end result looks like:

```
language: python
branches:
  except:
  - gh-pages
  only:
  - csv
python:
- '2.7'
before_install:
- chmod 755 ./python/prebuild.sh
install:
- pip install -r ./python/requirements.txt
script:
- "./python/build.sh"
env:
  global:
  - GH_REPO="account/repo"
  - secure: travis-generated-stuff

```

And voilà! Once these files are added to the repository, upon next deploy on the `csv` branch Travis-CI will trigger the scripts and update all the data in ElasticSearch and the Github Pages website.

Hope this is useful to you and do [contact me](https://twitter.com/mgiraldo) if there’s any glaring issues/omissions in this quick example. Special thanks to [@auremoser](https://twitter.com/auremoser) for her feedback while writing this text.

<div class="footnotes" markdown="1">---

1. [https://rmflight.github.io/posts/2014/11/travis\_ci\_gh\_pages.html](https://rmflight.github.io/posts/2014/11/travis_ci_gh_pages.html) [↩](#fnref-944-1)
2. <http://awestruct.org/auto-deploy-to-github-pages/> [↩](#fnref-944-2)
3. [http://pghalliday.com/github/ssh/travis-ci/2014/09/19/auto-build-and-deploy-github-pages-with-travis-ci.html  ](http://pghalliday.com/github/ssh/travis-ci/2014/09/19/auto-build-and-deploy-github-pages-with-travis-ci.html) [↩](#fnref-944-3)
4. <https://gist.github.com/bewest/6100033> [↩](#fnref-944-4)

</div>