---
id: 100
title: 'Web design patterns, Will Wright y Spore'
date: '2007-08-20T03:39:12+00:00'
author: blog
layout: post
guid: 'http://www.mauriciogiraldo.com/blog/2007/08/20/web-design-patterns-will-wright-y-spore/'
permalink: /2007/08/20/web-design-patterns-will-wright-y-spore/
cc_content_license:
    - ''
cc_content_license_uri:
    - ''
cc_content_license_img:
    - ''
categories:
    - ciencia
    - diseño
    - general
    - información
    - interacción
    - juegos
    - tips
    - video
    - web
---

**Un problema de diseño web puede tener muchas soluciones**, no todas necesariamente correctas (lo correcto o apropiado de la solución depende en buena medida del contexto en el que se utiliza). Esto lo había [mencionado antes](http://www.mauriciogiraldo.com/blog/2007/04/03/visualizacion-de-informacion-diseno-de-interfaces-naturaleza-y-codigo/ "mga/blog: Visualización de información, diseño de interfaces, naturaleza y código"), pero vale la pena ampliar. Tomemos, por ejemplo, algo aparentemente muy sencillo: la restricción de acceso a un sitio. ¿Cuándo es el momento apropiado para pedir el *login* del visitante? Algunos sitios web permiten que el usuario los utilice sin exigir un registro a menos que éste quiera interactuar con otros usuarios:

![En Flickr.com el usuario puede ver casi todo el contenido sin necesidad de registrarse](//www.mauriciogiraldo.com/blog/wp-content/uploads/2007/08/flickr.gif)

… otros, en cambio, excluyen por completo a usuarios nuevos:

![Facebook.com está completamente restringido a usuarios no registrados](//www.mauriciogiraldo.com/blog/wp-content/uploads/2007/08/facebook.gif)

… y también hay casos donde el tipo de servicio que ofrece el sitio hace obligatoria la identificación del usuario:

![No queremos que otras personas lean nuestro correo en Hotmail.com](//www.mauriciogiraldo.com/blog/wp-content/uploads/2007/08/hotmail.gif)

Eso sin tener en cuenta **si es necesario exigir que el usuario se registre** ni los detalles que se pueden ver en las imágenes como el link “¿olvidó su clave?”, la casilla “recordar mi identidad en este computador” y otros elementos que cambian de un sitio a otro. La “respuesta correcta” depende de diferentes factores como el modelo de negocio del sitio, el carácter costo/beneficio de ese paso (o pasos) adicional (suele ser dispendioso registrarse en un sitio web, al punto de perder potenciales usuarios en ese punto a menos que el contenido o servicio que ofrezca sea valioso para el usuario), el tipo de servicio que se ofrece, y más.

El caso del *login*, a pesar de aparentemente ya “estar inventado”, muestra la gran cantidad de consideraciones que deben tenerse en cuenta al crear interfases web (o de cualquier tipo). Pero bueno, como [diría](http://www.youtube.com/watch?v=bmEMXqj1UHM "¿y ahora... quién podrá defendernos?") el [Chapulín Colorado](http://en.wikipedia.org/wiki/El_Chapul%C3%ADn_Colorado "... en Wikipedia"): ¡que no panda el cúnico! ya que existen lo que llaman:

**Patrones de diseño web**

Un patrón de diseño web (*web design pattern*) describe la solución óptima a un problema común de diseño web en un contexto específico:

> Patterns are optimal solutions to common problems. As common problems are tossed around a community and are resolved, common solutions often spontaneously emerge. Eventually, the best of these rise above the din and self-identify and become refined until they reach the status of a Design Pattern. \[[1](http://developer.yahoo.com/ypatterns/page.php?page=lifecycle "Yahoo! Design Pattern Library - What's a Pattern?")\]

Una definición bastante [darwiniana](http://www.mauriciogiraldo.com/blog/2007/01/25/soundflavor-las-obras-completas-de-charles-darwin/ "mga/blog: Charles Darwin"). Los patrones se generan a partir de una especie de evolución, donde la mejor solución tiende a prevalecer. Los problemas pueden ser muy simples: [cómo presentar grandes cantidades de información que viene organizada alfabéticamente](http://developer.yahoo.com/ypatterns/pattern.php?pattern=alphafilterlinks); o muy complejos: [cómo manejar cambios de estado por medio de transiciones](http://developer.yahoo.com/ypatterns/parent.php?pattern=transition). En internet hay muchas inciativas por agrupar y categorizar esos patrones, algunas de las cuales enumero a continuación:

- [Yahoo! Design Pattern Library](http://developer.yahoo.com/ypatterns/): En Yahoo! tienen un impresionante listado categorizado de patrones que usan en sus propios proyectos acompañados de imágenes, descripción y recomendaciones. Cada patrón está complementado por una entrada en el [blog de interfases](http://yuiblog.com/).
- [A Pattern Library for Interaction Design](http://www.welie.com/): De Martijn van Welie, holandés, PhD en Human Computer Interaction y quien ha recopilado y organizado una gran cantidad de patrones e incluye links a otros sitios similares.
- [Web Patterns Project](http://www.ui-designpatterns.org/): Iniciativa de unos estudiantes de U. C. Berkeley que se preguntaron “Our primary motivation for this project was to consider why user experience, particularly around web-based user interfaces, is so poor across the Berkeley domain. Why is a good user interface so difficult to create? *Why is it that at U.C. Berkeley, a leader in technology research, a place of high academic achievement and innovation, good web user experience is hard to come by?*”. Este suele ser un sentimiento generalizado.

Adicionalmente está [User Interface Engineering](http://www.uie.com/), una firma de investigación en usabilidad de interfaces. Tienen una gran cantidad de [artículos en el tema](http://www.uie.com/articles/web_forms/).

[![Spore - © 2006 Electronic Arts, Inc.](//www.mauriciogiraldo.com/blog/wp-content/uploads/2007/08/spore.jpg)](http://www.spore.com/)

**SPORE**

En otra área del diseño (juegos en este caso) pero muy afín con la teoría de la evolución está **[Will Wright](http://en.wikipedia.org/wiki/Will_Wright "Will Wright en Wikipedia")**. Mundialmente conocido por ser el diseñador de [SimCity](http://en.wikipedia.org/wiki/SimCity "SimCity en Wikipedia") y [The Sims](http://en.wikipedia.org/wiki/The_Sims "The Sims en Wikipedia"), exitosos juegos de video: el primero creó un nuevo paradigma (no se pierde ni gana) y el segundo es uno de los más vendidos. Wright fue [portada y protagonista](http://www.wired.com/wired/archive/14.04/wright.html "Wired 14.04 - Dream Machines") de una edición dedicada a juegos de la revista Wired en la que habla de [Spore](http://www.spore.com/ "sitio web oficial"), un juego que permitirá al jugador simular la evolución de una especie (desde un organismo unicelular hasta la conquista del espacio). El juego aún no ha sido lanzado pero las expectativas son altas. En Marzo de 2007 Wright fue invitado a las [TED Talks](http://www.mauriciogiraldo.com/blog/2007/01/25/hillman-curtis-ted-talks/ "mga/blog: TED Talks") donde hizo una breve presentación de ese juego:

<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" height="285" width="432"><param name="name" value="VE_Player"></param><param name="bgcolor" value="#FFFFFF"></param><param name="align" value="middle"></param><param name="flashvars" value="bgColor=FFFFFF&file=http://static.videoegg.com/ted/movies/WILLWRIGHT-2007_high.flv&autoPlay=false&fullscreenURL=http://static.videoegg.com/ted/flash/fullscreen.html&forcePlay=false&logo=&allowFullscreen=true"></param><param name="src" value="http://static.videoegg.com/ted/flash/loader.swf"></param><param name="wmode" value="window"></param><param name="quality" value="high"></param><embed align="middle" bgcolor="#FFFFFF" flashvars="bgColor=FFFFFF&file=http://static.videoegg.com/ted/movies/WILLWRIGHT-2007_high.flv&autoPlay=false&fullscreenURL=http://static.videoegg.com/ted/flash/fullscreen.html&forcePlay=false&logo=&allowFullscreen=true" height="285" name="VE_Player" quality="high" src="//static.videoegg.com/ted/flash/loader.swf" type="application/x-shockwave-flash" width="432" wmode="window"></embed></object>