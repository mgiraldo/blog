---
id: 676
title: 'La Fábrica de Pensamientos'
date: '2010-03-28T15:30:37+00:00'
author: blog
layout: post
guid: 'http://www.mauriciogiraldo.com/blog/?p=676'
permalink: /2010/03/28/fabrica-de-pensamientos/
categories:
    - arte
    - diseño
    - interacción
    - programación
    - video
    - visualización
    - web
---

Fui invitado por mis colegas Hernando Barragán y Annelie Franke a participar en la *[Fábrica de Pensamientos](http://loquesefabrica.com)*, un proyecto que se deprendió de su [curso Estudio 6](http://designblog.uniandes.edu.co/blogs/dise3135/) del segundo semestre de 2009. El proyecto fue comisionado por el XII Festival Iberoamericano de Teatro de Bogotá, uno de los festivales de este tipo más importantes del mundo. La idea era hacer una obra colaborativa que permitiera a la gente interactuar con el festival.

A partir de esa premisa, se realizó la *Fábrica de Pensamientos* cuya idea principal es guardar y clasificar los pensamientos de los visitantes al festival. Los pensamientos son nociones abstractas e intangibles (aún no podemos leer la mente). Con la Fábrica se busca hacer esos pensamientos tangibles de alguna forma, “guardándolos” en botellas que luego pueden ser abiertas y su contenido se hace visible como el genio de la lámpara.

<object classid="clsid:02bf25d5-8c17-4b23-bc80-d3488abddc6b" codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0" height="288" width="450"><param name="autoplay" value="false"></param><param name="loop" value="false"></param><param name="controller" value="true"></param><param name="src" value="/blog/wp-content/uploads/2010/03/visualizador.m4v"></param><embed autoplay="false" controller="true" height="288" loop="false" src="/blog/wp-content/uploads/2010/03/visualizador.m4v" type="video/quicktime" width="450"></embed></object>

Cada botella representa una inquietud planteada por el festival. Cada hora y media se pone una nueva botella en la base de llenado:

<figure aria-describedby="caption-attachment-705" class="wp-caption alignnone" id="attachment_705" style="width: 450px">![](//www.mauriciogiraldo.com/blog/wp-content/uploads/2010/03/fill.jpg "Una botella en proceso de ser llenada")<figcaption class="wp-caption-text" id="caption-attachment-705">Una botella en proceso de ser llenada</figcaption></figure>

A partir de ese momento, y durante los siguientes noventa minutos, se llenará esa botella con los pensamientos que la gente escribe en las máquinas de entrada:

<figure aria-describedby="caption-attachment-703" class="wp-caption alignnone" id="attachment_703" style="width: 450px">![](//www.mauriciogiraldo.com/blog/wp-content/uploads/2010/03/input.jpg "Máquina de entrada de pensamiento")<figcaption class="wp-caption-text" id="caption-attachment-703">Máquina de entrada de pensamiento</figcaption></figure>

Pensamientos también pueden entrar en la botella vía mensaje de texto de teléfono celular.

Dado que el Festival es un evento para toda la familia es necesario hacer una curaduría de los pensamientos (básicamente prevenir el ingreso de obscenidades… seamos honestos, hay *mucho* pensamiento obsceno sucediendo en nuestras cabezas 😛 ).

<figure aria-describedby="caption-attachment-710" class="wp-caption alignnone" id="attachment_710" style="width: 450px">![](//www.mauriciogiraldo.com/blog/wp-content/uploads/2010/03/curaduria.jpg "Máquina de curaduría")<figcaption class="wp-caption-text" id="caption-attachment-710">Máquina de curaduría</figcaption></figure>

Una vez aprobado, el mensaje entra a la botella que se encuentra en la base de llenado:

<object classid="clsid:02bf25d5-8c17-4b23-bc80-d3488abddc6b" codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0" height="288" width="450"><param name="autoplay" value="false"></param><param name="loop" value="false"></param><param name="controller" value="true"></param><param name="src" value="/blog/wp-content/uploads/2010/03/llenado.m4v"></param><embed autoplay="false" controller="true" height="288" loop="false" src="/blog/wp-content/uploads/2010/03/llenado.m4v" type="video/quicktime" width="450"></embed></object>

Cuando se retira la botella de la base, se etiqueta y se guarda para luego ser consultada por los visitantes en cualquier momento en la estación de visualización.

<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" height="253" width="450"><param name="data" value="http://www.flickr.com/apps/video/stewart.swf?v=71377"></param><param name="flashvars" value="intl_lang=en-us&photo_secret=721f3e0226&photo_id=4470994212"></param><param name="bgcolor" value="#000000"></param><param name="allowFullScreen" value="true"></param><param name="src" value="http://www.flickr.com/apps/video/stewart.swf?v=71377"></param><param name="allowfullscreen" value="true"></param><embed allowfullscreen="true" bgcolor="#000000" data="http://www.flickr.com/apps/video/stewart.swf?v=71377" flashvars="intl_lang=en-us&photo_secret=721f3e0226&photo_id=4470994212" height="253" src="//www.flickr.com/apps/video/stewart.swf?v=71377" type="application/x-shockwave-flash" width="450"></embed></object>

Al finalizar el Festival en abril 4 de 2010 habrá sesenta botellas llenas de pensamientos que podrán ser visualizadas en el [sitio web del proyecto](http://loquesefabrica.com).

Mi labor principal fue desarrollar la parte visual (interfaz de entrada de pensamientos, interfaz de moderación, interfaz de llenado, interfaz de visualización, sitio web), la base de datos que soporta el sistema de pensamientos e inquietudes y toda la comunicación que sucede entre estas y las botellas. El sistema de mensajes de texto fue amablemente provisto por [Contacto SMS](http://www.contactosms.com.co).

Si tiene curiosidad de saber qué tecnologías están involucradas: las interfases están hechas en Adobe Flash y se comunican con la base de datos MySQL usando PHP y AMFPHP. Las interfases de llenado y visualización de botellas se comunican vía *sockets* con [Wiring](http://wiring.org.co/) usando un tag RFID.