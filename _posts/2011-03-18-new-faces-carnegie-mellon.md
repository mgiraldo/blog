---
id: 794
title: 'New Faces'
date: '2011-03-18T22:34:19+00:00'
author: blog
layout: post
permalink: /blog/2011/03/18/new-faces-carnegie-mellon/
categories:
    - arte
    - diseño
    - información
    - interacción
    - programación
    - visualización
---

*–Texto en inglés como parte de [mi estudio en Carnegie Mellon University](http://www.hcii.cmu.edu). Eventualmente haré una versión en español.–*

![](//www.mauriciogiraldo.com/blog/wp-content/uploads/2011/03/faces.png "faces")

*New Faces* is a project that began in 2009 after I got fed up with Colombia’s online newspapers’ ([one site](http://www.eltiempo.com/), [another site](http://www.elespectador.com/)) high emphasis in sports and celebtrity-related news. I decided to take a screenshot of the offending website and remove this information (along with advertising) in order to see [what was left](http://www.flickr.com/photos/mgiraldo/4083937501/).

Clearly sports, advertising and celebrity news have a relatively high importance for this colombian newspaper (at least in its online incarnation). This led me to wonder if this was the same across different countries. I decided to create a Python script that makes use of [webkit2png-0.5](http://www.paulhammond.org/2009/03/webkit2png-0.5/) to take a screenshot of eleven news websites every night at 8pm. This script has been ran almost every night since November 8, 2009.

**New faces**

After seeing Rutherford Chang’s work with the New York Times where he blacks-out every element in the page *except* faces (no link available, sorry) I thought it would be an interesting idea to execute this same process in my dataset of more than 3,000 files and 10 GB.

I tested various technical solution for this process and decided upon using the [OpenCV library for Processing](http://ubaa.net/shared/processing/opencv/).

After that it was a matter of applying it to my dataset and see if it worked. I tried several parameters for the `detect()` method since there were many false positives (text selected as face) and false negatives (face undetected when there should be) but could not get 100% accuracy. These errors provide an interesting outcome anyway.

The faces are extracted from the screenshots and saved as separate files along with their original location in x,y and number of total faces in the screenshot. There were 28,000+ faces deteced (less than 10 faces per screenshot).

With this new subset I then created a Flash interface to view the faces in their original x,y coordinates with buttons to toggle the visibility of individual news sites. Next to the buttons a **blue line indicates average face area**, a **green line indicates how many screenshots** (individual days captured) and a **red line indicates total amount of faces** in that site.

**[View the Flash interface online in your browser](http://www.mauriciogiraldo.com/lab/newfaces/)**. **F for fullscreen** (click the interface to give it focus). CAUTION: ~30,000 images files loaded might clog up your browser (although they’re about 2kb each only). Interface is not optimized for low-end computers.

**Future work**

From this initial work some superficial conclusions could be made (see photo captions). Further analysis could provide some interesting information such as:

- dominant race or skin color
- gender distribution
- dominant face expression (sad, happy, angry, etc.)
- average face area
- preferred location in the page
- how the above change over time

The interface makes use of [Bit-101?s Minimal Comps](http://www.minimalcomps.com/).

This project was done as part of the requirements to complete the [Spring 2011 Interactive Art and Computational Design course](http://golancourses.net/2011spring/) with Professor Golan Levin in Carnegie Mellon University.