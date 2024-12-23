---
id: 713
title: 'The Thought Factory'
date: '2010-03-28T17:13:59+00:00'
author: blog
layout: post
permalink: /2010/03/28/the-thought-factory/
categories:
    - arte
    - diseño
    - interacción
    - programación
    - video
    - visualización
    - web
---

I was invited by my colleagues Hernando Barragán and Annelie Franke to collaborate with the *[Thought Factory](http://loquesefabrica.com)*, a project that started in their [Design Studio 6](http://designblog.uniandes.edu.co/blogs/dise3135/) course for the second semester 2009. The project was commisioned by the XII Iberoamerican Theatre Festival in Bogotá, one of the most important festivals of its type in the world. The idea was to create a collaborative work that would allow people to interact with the festival.

With this in mind, the *Thought Factory* was created and its main purpose was to save and classify the thoughts of festival visitors. Thoughts are abstract and intangible notions (we can’t read minds… yet). The Factory was made to make those thoughts somewhat tangible, “saving” them in bottles that can later be opened and their contents made visible as the genius in the lamp.

<object classid="clsid:02bf25d5-8c17-4b23-bc80-d3488abddc6b" codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0" height="288" width="450"><param name="autoplay" value="false"></param><param name="loop" value="false"></param><param name="controller" value="true"></param><param name="src" value="/blog/wp-content/uploads/2010/03/visualizador.m4v"></param><embed autoplay="false" controller="true" height="288" loop="false" src="/blog/wp-content/uploads/2010/03/visualizador.m4v" type="video/quicktime" width="450"></embed></object>

Each bottle represents an inquiry made by festival organizers. Every hour and a half a new bottle is placed in the filling station:

<figure aria-describedby="caption-attachment-705" class="wp-caption alignnone" id="attachment_705" style="width: 450px">![](/blog/assets/uploads/2010/03/fill.jpg "A bottle being filled")<figcaption class="wp-caption-text" id="caption-attachment-705">A bottle being filled</figcaption></figure>

From that moment, and during the next ninety minutes, that bottle will be filled with thoughts from people who type them in the input stations:

<figure aria-describedby="caption-attachment-703" class="wp-caption alignnone" id="attachment_703" style="width: 450px">![](/blog/assets/uploads/2010/03/input.jpg "Thought input machine")<figcaption class="wp-caption-text" id="caption-attachment-703">Thought input machine</figcaption></figure>

Thoughts can also be sent as an SMS message via mobile phone.

Since the Festival as for all ages it was necessary to curate these thoughts (basically removing obscene ones… let’s be honest, there’s plenty of obscenities in our thoughts :P).

<figure aria-describedby="caption-attachment-710" class="wp-caption alignnone" id="attachment_710" style="width: 450px">![](/blog/assets/uploads/2010/03/curaduria.jpg "Curating machine")<figcaption class="wp-caption-text" id="caption-attachment-710">Curating machine</figcaption></figure>

Once approved, the message enters the bottle in the filling station:

<object classid="clsid:02bf25d5-8c17-4b23-bc80-d3488abddc6b" codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0" height="288" width="450"><param name="autoplay" value="false"></param><param name="loop" value="false"></param><param name="controller" value="true"></param><param name="src" value="/blog/wp-content/uploads/2010/03/llenado.m4v"></param><embed autoplay="false" controller="true" height="288" loop="false" src="/blog/wp-content/uploads/2010/03/llenado.m4v" type="video/quicktime" width="450"></embed></object>

When removed from the filling station, the bottle is labelled and placed with the rest of the full bottles so its thoughts can be read in the viewing station.

<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" height="253" width="450"><param name="data" value="http://www.flickr.com/apps/video/stewart.swf?v=71377"></param><param name="flashvars" value="intl_lang=en-us&photo_secret=721f3e0226&photo_id=4470994212"></param><param name="bgcolor" value="#000000"></param><param name="allowFullScreen" value="true"></param><param name="src" value="http://www.flickr.com/apps/video/stewart.swf?v=71377"></param><param name="allowfullscreen" value="true"></param><embed allowfullscreen="true" bgcolor="#000000" data="http://www.flickr.com/apps/video/stewart.swf?v=71377" flashvars="intl_lang=en-us&photo_secret=721f3e0226&photo_id=4470994212" height="253" src="//www.flickr.com/apps/video/stewart.swf?v=71377" type="application/x-shockwave-flash" width="450"></embed></object>

At the end of the Festival (in april 4, 2010) there will be sixty bottles full of thoughts that can be read in the [project website](http://loquesefabrica.com).

My main tasks were developing the visual interfaces (thought input, thought curating, filling station, bottle visualization), the database that manages thoughts and inquiries and all communication happening between these and the bottles. SMS message service was kindly provided by [Contacto SMS](http://www.contactosms.com.co).

If you are curious about the tech side of the project: interfaces are made with Adobe Flash which communicate with a MySQL database via PHP and AMFPHP. Filling and viewing stations communicate with the bottles via [Wiring](http://wiring.org.co/) using sockets and an RFID tag. ActionScript programming was made in [FDT](http://www.fdt.powerflasher.com/).