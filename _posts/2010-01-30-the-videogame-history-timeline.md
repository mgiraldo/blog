---
id: 634
title: 'The videogame history timeline'
date: '2010-01-30T16:40:49+00:00'
author: blog
layout: post
permalink: /2010/01/30/the-videogame-history-timeline/
categories:
    - diseño
    - general
    - información
    - interacción
    - juegos
    - visualización
    - web
---

*This is an english translation of [a previous post](http://www.mauriciogiraldo.com/blog/2010/01/25/una-linea-de-tiempo-de-videojuegos/). I believe english readers could be interested in this project.*

For a long time I have wanted to do a videogame history timeline. It would combine several of my interests: **information visualization, history, time** and, of course, **videogames**. Currently I have a [class on videogame history](http://designblog.uniandes.edu.co/blogs/dise3223/ "blog del curso") (class blog in spanish) as a lecturer in the Design Department at the Universidad de los Andes and such a timeline would be useful (and neat).

I had the opportunity of creating a history timeline for a client and decided to use that code as the starting point for my timeline. This is why I can now present (*drumroll*):

### The videogame history timeline

The URL is: <http://www.mauriciogiraldo.com/vgline/beta/>

<figure aria-describedby="caption-attachment-620" class="wp-caption alignnone" id="attachment_620" style="width: 300px">[![](//www.mauriciogiraldo.com/blog/wp-content/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-0-29-53-300x190.png "principal")](/assets/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-0-29-53.png)<figcaption class="wp-caption-text" id="caption-attachment-620">clic para ver imagen completa</figcaption></figure>

The timeline showcases **eight types of events**:

1. **people** (birthdates) of relevance: game designers and developers, scientists, artists, entrepreneurs.
2. **business**: companies or important business events.
3. **consoles** (or hardware such as PCs) where videogames are executed.
4. **games**
5. **accessories and controls**: peripherals that are connected to consoles.
6. **technologies** of importance.
7. **cultural**: events that have somehow influenced the world of videogames (books, movies, ideas or theories, etc.).
8. **other** events that contextualize what was happening worldwide when the other types of events happened.

Every event can be **related to other events** in three ways:

- **creation** (event A created event B): mostly used to relate a person with the games he/she created
- **inspiration** (event A was inspired or is “plainly” related to event B)
- **series** (event A precedes event B): for “sequences” of events (eg.: the “Mario” series by Nintendo are assumed to be sequential editions even though they were developed for different consoles)

Presenting this information clearly to the user is rather complicated. *Not to say that I am finished with the interface.* It still needs work and I want to explore more possibilities.

You need to press SPACEBAR in order to see the relationships between events:

<figure aria-describedby="caption-attachment-621" class="wp-caption alignnone" id="attachment_621" style="width: 300px">[![](//www.mauriciogiraldo.com/blog/wp-content/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-0-29-57-300x190.png "relations between events")](/assets/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-0-29-57.png)<figcaption class="wp-caption-text" id="caption-attachment-621">relations between events</figcaption></figure>

Given that you see *a lot* of relations between events in the default display mode (and even more events are missing from the timeline) I decided to allow the user **to turn on/off event types and relation types**. This way, if I turn off all events except people and games, I can see the screen with less “noise”:

<figure aria-describedby="caption-attachment-622" class="wp-caption alignnone" id="attachment_622" style="width: 300px">[![](//www.mauriciogiraldo.com/blog/wp-content/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-0-30-15-300x190.png "people and games")](/assets/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-0-30-15.png)<figcaption class="wp-caption-text" id="caption-attachment-622">people and games</figcaption></figure>

It’s difficult (maybe even impossible) to plot all events and relations while completely avoiding superposed lines (or maybe I need to investigate a little more). However, I believe that the current solution is easy to understand once you have played with it for a few minutes (I didn’t set out to create a conventional interface; I wanted to experiment a little).

This is what I see if I turn on *series* and games:

<figure aria-describedby="caption-attachment-623" class="wp-caption alignnone" id="attachment_623" style="width: 300px">[![](//www.mauriciogiraldo.com/blog/wp-content/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-0-30-57-300x190.png "game series")](/assets/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-0-30-57.png)<figcaption class="wp-caption-text" id="caption-attachment-623">game series</figcaption></figure>

You can see that [Doom II](http://www.mauriciogiraldo.com/vgline/beta/#/338 "Doom II en la línea de tiempo") goes after [Doom](http://www.mauriciogiraldo.com/vgline/beta/#/323 "Doom en la línea de tiempo") and that there is [another later game](http://www.mauriciogiraldo.com/vgline/beta/#/342 "Doom III en la línea de tiempo") in the series. [Riven](http://www.mauriciogiraldo.com/vgline/beta/#/267 "Riven en la línea de tiempo") goes after [Myst](http://www.mauriciogiraldo.com/vgline/beta/#/265 "Myst en la línea de tiempo"), etc.

### Search

Users are lazy (okay, all but you) and if they don’t find what they are looking for in a few seconds they will go somewhere else. Also, in large sets of information (even though the timeline currently has only a few hundred events) it is difficult to predict how a user expects to find some particular data point. This is why the timeline has a search box:

<figure aria-describedby="caption-attachment-624" class="wp-caption alignnone" id="attachment_624" style="width: 300px">[![](//www.mauriciogiraldo.com/blog/wp-content/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-2-4-28-300x190.png "search results")](/assets/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-2-4-28.png)<figcaption class="wp-caption-text" id="caption-attachment-624">search results for "nintendo"</figcaption></figure>

### Viva la *open source*!

In my web developing years I have benefitted from a large amount of open source libraries/programs/content and, [every time](http://sourceforge.net/projects/dmcourseware/ "Digital Media Courseware, proyecto en colaboración con Hernando Barragán") [I can](http://sourceforge.net/projects/spaw-cf "SPAW-CF, una versión ColdFusion de un editor de texto web"), I try to [give something back](http://stackoverflow.com/users/160933/mga "mi perfil en Stack Overflow"). In this case I have created a [Google Code project](http://code.google.com/p/vgline/) so, whoever knows ActionScript 3 and Flash, can take a look and see what benefits he/she can find there (I don’t plan on supporting this code, use under your own risk).

### Things to do

The timeline is far from finished. Among the things I want to do:

- **content in spanish**: I am using this timeline in my [Videogame history class](http://designblog.uniandes.edu.co/blogs/dise3223/programa-del-curso/ "class blog") and I want the content to be fully translated
- **complete content**: a lot of information is missing or incomplete
- **experiment**: this basic information setup can be explored in many different ways
- **share**: there is an [RSS feed with the whole content](http://www.mauriciogiraldo.com/vgline/rss/event/feed) so anyone can use it to visualize it (an [API](http://en.wikipedia.org/wiki/Application_programming_interface) would be more elegant) although my current server is a little unsteady at the moment

### Technical stuff (and other)

Several people have collaborated, inputting data or with their opinion. Among them: Nicolás Arteaga, Vanessa Gómez, Andrea D’Macedo, Manuel Piñeros, Sebastián Ramírez, Rafael Tudela y Cárlos López. If you want to collaborate or **if you find any innaccuracies**, please [contact me](../../vgline/contact).

If you want to know what powers the timeline: content is fed via [Drupal](http://drupal.org/) (which works on top of PHP, MySQL and Apache) to which I connect from Flash using [AMFPHP](http://www.amfphp.org/) (Drupal has a [module for AMFPHP](http://drupal.org/project/amfphp) which I had to modify a bit). This has the benefit of automagically generating a [plain text version of the content](http://www.mauriciogiraldo.com/vgline/). The server is a little bit slow (the whole database is loaded in the first request… that’s why you see the quiz). Any performance ideas are welcome. Keep in mind it is a [shared hosting environment](http://www.mediatemple.net).

This project has been supported by Powerflasher, the people behind [FDT](http://www.fdt.powerflasher.com/) (the cool software I use to write [all the ActionScript](http://code.google.com/p/vgline/source/browse/trunk/src/com/pingpongestudio/timeline/Timeline.as "un pocotón de ActionScript") you see in Google Code).