---
id: 396
title: '¿su blog de WordPress está lento?'
date: '2009-08-03T18:02:55+00:00'
author: blog
layout: post
guid: 'http://www.mauriciogiraldo.com/blog/?p=396'
permalink: /2009/08/03/tip-para-acelerar-su-blog-de-wordpress/
categories:
    - tips
    - video
    - web
---

Desde hace rato estaba inconforme con la velocidad de este blog. Suponía que era un tema de hosting, pero [MediaTemple](http://www.mediatemple.net/go/order/?refdom=pingpongestudio.com) ha sido mi proveedor para cualquier cantidad de sitios, propios y ajenos, desde 2001 (o aún antes) y nunca he tenido grandes inconvenientes con ellos. Supuse que era un tema de [WordPress](http://wordpress.org/) (el corazón detrás de este blog) pero **he visto muchos blogs WordPress que no son lentos**. Reduje la cantidad de *posts* que salen en cada pantallazo a cinco y nada (igual me parece mejor dejar eso como está ahora… el [*feed*](http://feeds.feedburner.com/mgablog) sigue igual con diez *posts*). El blog ya estaba *demasiado* lento al punto de ser insoportable. Me puse a buscar y encontré este [listado de tips](http://www.idano.net/nailing-down-slow-performance-in-wordpress-74.htm "Nailing Down Slow Performance in WordPress") para resolver problemas de velocidad que *finalmente* resolvió el problema. Como el listado está en inglés, acá publico mi versión en español:

1. Para evitar que su presencia como usuario administrador afecte el desempeño del blog, abra la administración de WP en un navegador (Firefox por ejemplo) y el blog como tal, sin estar logueado, en otro (Opera por ejemplo).
2. Vuelva a uno de los temas predeterminados/básicos de WordPress.
3. Si esto no funciona, desactive todos los plug-ins que tenga instalados.
4. Pruebe que el blog funcione bien (sea rápido o más rápido que antes). Si esto no sucede, puede que simplemente sea un tema de hosting… de pronto es momento de [pasarse a MediaTemple](http://www.mediatemple.net/go/order/?refdom=pingpongestudio.com) 🙂
5. Active uno a uno los *plug-ins*, verificando que la velocidad no se afecte demasiado.
6. Eventualmente encontrará uno que sea el culpable de la lentitud.

Cuando encuentre al culpable, busque una versión actualizada del *plug-in* o de pronto habrá uno equivalente que funcione mejor. En mi caso era **BC Enable** (no pongo link porque no se los recomiendo) que permite incluir videos de [BrightCove](http://www.brightcove.com/) (como un YouTube pero comercial/profesional) en el blog. Lo peor de todo es que **ni siquiera estaba usando el maldito *plug-in*** (!) (simplemente lo tenía activado en la administración y ya). A veces es mejor simplemente usar el código &lt;embed&gt; de los sitios así no sea “[políticamente](http://www.alistapart.com/articles/flashsatay "Flash Satay: Embedding Flash While Supporting Standards") [correcto](http://www.alistapart.com/articles/byebyeembed "Bye Bye Embed")“.

En restrospectiva parece obvio que el problema fuera un *plug-in*, pero la verdad nunca pensé que pudieran afectar *tanto* la velocidad del blog.

Espero el blog sea nuevamente un poco más tolerable (en lo que concierne a velocidad, por lo demás si no respondo) y el *tip* le sirva a alguien más.