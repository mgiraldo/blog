document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-fd43f22140a6ad2cc9d0aa1f169a01f3.css">')
document.write('<div id=\"gist14609494\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-shell \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" data-paste-markdown-skip>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#!<\/span>/bin/bash<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">set<\/span> -e<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC3\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Deploy built site to this branch<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC5\" class=\"blob-code blob-code-inner js-file-line\">TARGET_BRANCH=master<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Sync the contents of this directory where the site should have been built<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC7\" class=\"blob-code blob-code-inner js-file-line\">SOURCE_DIR=_site<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC8\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">if<\/span> [ <span class=\"pl-k\">!<\/span> <span class=\"pl-k\">-d<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-smi\">\$SOURCE_DIR<\/span><span class=\"pl-pds\">&quot;<\/span><\/span> ]<span class=\"pl-k\">;<\/span> <span class=\"pl-k\">then<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC10\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">echo<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>SOURCE_DIR (<span class=\"pl-smi\">\$SOURCE_DIR<\/span>) does not exist, build the source directory before deploying<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC11\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">exit<\/span> 1<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC12\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">fi<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC13\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC14\" class=\"blob-code blob-code-inner js-file-line\">REPO=<span class=\"pl-s\"><span class=\"pl-pds\">\$(<\/span>git config remote.origin.url<span class=\"pl-pds\">)<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC15\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC16\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">if<\/span> [ <span class=\"pl-k\">-n<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-smi\">\$TRAVIS_BUILD_ID<\/span><span class=\"pl-pds\">&quot;<\/span><\/span> ]<span class=\"pl-k\">;<\/span> <span class=\"pl-k\">then<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC17\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> When running on Travis we need to use SSH to deploy to GitHub<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC18\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC19\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> The following converts the repo URL to an SSH location,<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC20\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> decrypts the SSH key and sets up the Git config with<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC21\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> the correct user name and email (globally as this is a<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC22\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> temporary travis environment)<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC23\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC24\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Set the following environment variables in the travis configuration (.travis.yml)<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC25\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC26\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span>   DEPLOY_BRANCH    - The only branch that Travis should deploy from<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC27\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span>   ENCRYPTION_LABEL - The label assigned when encrypting the SSH key using travis encrypt-file<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC28\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span>   GIT_NAME         - The Git user name<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC29\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span>   GIT_EMAIL        - The Git user email<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC30\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">#<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC31\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">echo<\/span> DEPLOY_BRANCH: <span class=\"pl-smi\">\$DEPLOY_BRANCH<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC32\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">echo<\/span> ENCRYPTION_LABEL: <span class=\"pl-smi\">\$ENCRYPTION_LABEL<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC33\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">echo<\/span> GIT_NAME: <span class=\"pl-smi\">\$GIT_NAME<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC34\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">echo<\/span> GIT_EMAIL: <span class=\"pl-smi\">\$GIT_EMAIL<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC35\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">if<\/span> [ <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-smi\">\$TRAVIS_BRANCH<\/span><span class=\"pl-pds\">&quot;<\/span><\/span> <span class=\"pl-k\">!=<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-smi\">\$DEPLOY_BRANCH<\/span><span class=\"pl-pds\">&quot;<\/span><\/span> ]<span class=\"pl-k\">;<\/span> <span class=\"pl-k\">then<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC36\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">echo<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Travis should only deploy from the DEPLOY_BRANCH (<span class=\"pl-smi\">\$DEPLOY_BRANCH<\/span>) branch<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L37\" class=\"blob-num js-line-number\" data-line-number=\"37\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC37\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c1\">exit<\/span> 0<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L38\" class=\"blob-num js-line-number\" data-line-number=\"38\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC38\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">else<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L39\" class=\"blob-num js-line-number\" data-line-number=\"39\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC39\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">if<\/span> [ <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-smi\">\$TRAVIS_PULL_REQUEST<\/span><span class=\"pl-pds\">&quot;<\/span><\/span> <span class=\"pl-k\">!=<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>false<span class=\"pl-pds\">&quot;<\/span><\/span> ]<span class=\"pl-k\">;<\/span> <span class=\"pl-k\">then<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L40\" class=\"blob-num js-line-number\" data-line-number=\"40\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC40\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c1\">echo<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Travis should not deploy from pull requests<span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L41\" class=\"blob-num js-line-number\" data-line-number=\"41\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC41\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c1\">exit<\/span> 0<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L42\" class=\"blob-num js-line-number\" data-line-number=\"42\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC42\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">else<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L43\" class=\"blob-num js-line-number\" data-line-number=\"43\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC43\" class=\"blob-code blob-code-inner js-file-line\">      ENCRYPTED_KEY_VAR=encrypted_<span class=\"pl-smi\">\${ENCRYPTION_LABEL}<\/span>_key<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L44\" class=\"blob-num js-line-number\" data-line-number=\"44\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC44\" class=\"blob-code blob-code-inner js-file-line\">      ENCRYPTED_IV_VAR=encrypted_<span class=\"pl-smi\">\${ENCRYPTION_LABEL}<\/span>_iv<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L45\" class=\"blob-num js-line-number\" data-line-number=\"45\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC45\" class=\"blob-code blob-code-inner js-file-line\">      ENCRYPTED_KEY=<span class=\"pl-smi\">\${<span class=\"pl-k\">!<\/span>ENCRYPTED_KEY_VAR}<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L46\" class=\"blob-num js-line-number\" data-line-number=\"46\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC46\" class=\"blob-code blob-code-inner js-file-line\">      ENCRYPTED_IV=<span class=\"pl-smi\">\${<span class=\"pl-k\">!<\/span>ENCRYPTED_IV_VAR}<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L47\" class=\"blob-num js-line-number\" data-line-number=\"47\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC47\" class=\"blob-code blob-code-inner js-file-line\">      REPO=<span class=\"pl-smi\">\${REPO<span class=\"pl-k\">/<\/span>git<span class=\"pl-k\">:<\/span><span class=\"pl-cce\">\\/\\/<\/span>github.com<span class=\"pl-cce\">\\/<\/span><span class=\"pl-k\">/<\/span>git<span class=\"pl-k\">@<\/span>github.com<span class=\"pl-k\">:<\/span>}<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L48\" class=\"blob-num js-line-number\" data-line-number=\"48\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC48\" class=\"blob-code blob-code-inner js-file-line\">      <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L49\" class=\"blob-num js-line-number\" data-line-number=\"49\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC49\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> The \`deploy_key.enc\` file should have been added to the repo and should<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L50\" class=\"blob-num js-line-number\" data-line-number=\"50\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC50\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> have been created from the deploy private key using \`travis encrypt-file\`<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L51\" class=\"blob-num js-line-number\" data-line-number=\"51\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC51\" class=\"blob-code blob-code-inner js-file-line\">      openssl aes-256-cbc -K <span class=\"pl-smi\">\$ENCRYPTED_KEY<\/span> -iv <span class=\"pl-smi\">\$ENCRYPTED_IV<\/span> -in deploy_key.enc -out deploy_key -d<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L52\" class=\"blob-num js-line-number\" data-line-number=\"52\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC52\" class=\"blob-code blob-code-inner js-file-line\">      <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L53\" class=\"blob-num js-line-number\" data-line-number=\"53\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC53\" class=\"blob-code blob-code-inner js-file-line\">      chmod 600 deploy_key<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L54\" class=\"blob-num js-line-number\" data-line-number=\"54\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC54\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-c1\">eval<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">\`<\/span>ssh-agent -s<span class=\"pl-pds\">\`<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L55\" class=\"blob-num js-line-number\" data-line-number=\"55\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC55\" class=\"blob-code blob-code-inner js-file-line\">      ssh-add deploy_key<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L56\" class=\"blob-num js-line-number\" data-line-number=\"56\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC56\" class=\"blob-code blob-code-inner js-file-line\">      git config --global user.name <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-smi\">\$GIT_NAME<\/span><span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L57\" class=\"blob-num js-line-number\" data-line-number=\"57\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC57\" class=\"blob-code blob-code-inner js-file-line\">      git config --global user.email <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span><span class=\"pl-smi\">\$GIT_EMAIL<\/span><span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L58\" class=\"blob-num js-line-number\" data-line-number=\"58\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC58\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">fi<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L59\" class=\"blob-num js-line-number\" data-line-number=\"59\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC59\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">fi<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L60\" class=\"blob-num js-line-number\" data-line-number=\"60\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC60\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">fi<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L61\" class=\"blob-num js-line-number\" data-line-number=\"61\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC61\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L62\" class=\"blob-num js-line-number\" data-line-number=\"62\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC62\" class=\"blob-code blob-code-inner js-file-line\">REPO_NAME=<span class=\"pl-s\"><span class=\"pl-pds\">\$(<\/span>basename <span class=\"pl-smi\">\$REPO<\/span><span class=\"pl-pds\">)<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L63\" class=\"blob-num js-line-number\" data-line-number=\"63\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC63\" class=\"blob-code blob-code-inner js-file-line\">TARGET_DIR=<span class=\"pl-s\"><span class=\"pl-pds\">\$(<\/span>mktemp -d /tmp/<span class=\"pl-smi\">\$REPO_NAME<\/span>.XXXX<span class=\"pl-pds\">)<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L64\" class=\"blob-num js-line-number\" data-line-number=\"64\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC64\" class=\"blob-code blob-code-inner js-file-line\">REV=<span class=\"pl-s\"><span class=\"pl-pds\">\$(<\/span>git rev-parse HEAD<span class=\"pl-pds\">)<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L65\" class=\"blob-num js-line-number\" data-line-number=\"65\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC65\" class=\"blob-code blob-code-inner js-file-line\">git clone --branch <span class=\"pl-smi\">\${TARGET_BRANCH}<\/span> <span class=\"pl-smi\">\${REPO}<\/span> <span class=\"pl-smi\">\${TARGET_DIR}<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L66\" class=\"blob-num js-line-number\" data-line-number=\"66\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC66\" class=\"blob-code blob-code-inner js-file-line\">rsync -rt --delete --exclude=<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>.git<span class=\"pl-pds\">&quot;<\/span><\/span> --exclude=<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>.nojekyll<span class=\"pl-pds\">&quot;<\/span><\/span> --exclude=<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>.travis.yml<span class=\"pl-pds\">&quot;<\/span><\/span> <span class=\"pl-smi\">\$SOURCE_DIR<\/span>/ <span class=\"pl-smi\">\$TARGET_DIR<\/span>/<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L67\" class=\"blob-num js-line-number\" data-line-number=\"67\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC67\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">cd<\/span> <span class=\"pl-smi\">\$TARGET_DIR<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L68\" class=\"blob-num js-line-number\" data-line-number=\"68\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC68\" class=\"blob-code blob-code-inner js-file-line\">git add -A <span class=\"pl-c1\">.<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L69\" class=\"blob-num js-line-number\" data-line-number=\"69\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC69\" class=\"blob-code blob-code-inner js-file-line\">git commit --allow-empty -m <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Built from commit <span class=\"pl-smi\">\$REV<\/span><span class=\"pl-pds\">&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-L70\" class=\"blob-num js-line-number\" data-line-number=\"70\"><\/td>\n        <td id=\"file-auto-build-and-deploy-github-pages-with-travis-ci-sh-LC70\" class=\"blob-code blob-code-inner js-file-line\">git push <span class=\"pl-smi\">\$REPO<\/span> <span class=\"pl-smi\">\$TARGET_BRANCH<\/span><\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/pghalliday/240fe740d523dad21d3f/raw/f2ce43ba62a20e68410089b1cb46195a8a67e565/auto-build-and-deploy-github-pages-with-travis-ci.sh\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/pghalliday/240fe740d523dad21d3f#file-auto-build-and-deploy-github-pages-with-travis-ci-sh\">auto-build-and-deploy-github-pages-with-travis-ci.sh<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
