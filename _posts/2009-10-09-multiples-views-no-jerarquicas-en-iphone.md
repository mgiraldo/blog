---
id: 446
title: 'Múltiples views no-jerárquicas en iPhone'
date: '2009-10-09T03:25:29+00:00'
author: blog
layout: post
permalink: /2009/10/09/multiples-views-no-jerarquicas-en-iphone/
enclosure:
    - "/wp-content/uploads/2009/10/InfiniteViews1.mov\n255554\nvideo/quicktime\n"
categories:
    - iphone
    - programación
    - tips
---

<embed align="right" height="380" src="/wp-content/uploads/2009/10/InfiniteViews1.mov" style="width: 192px; height: 380px;" type="video/quicktime" width="192">

*(English version at the bottom of this post)*

Recientemente he estado trabajando en [XCode](http://developer.apple.com/TOOLS/Xcode/) y [Cocoa Touch](http://developer.apple.com/technology/cocoa.html) para un proyecto que estoy haciendo para el iPhone. Objective-C (el lenguaje de programación usado) tiene sus mañas (como todo lenguaje), pero he encontrado bastante ayuda en la web, gracias especialmente a [Stanford](http://itunes.stanford.edu/), Google y a [Stackoverflow](http://stackoverflow.com/users/160933/mga).

Creo que es pertinente devolver algo a la comunidad, en particular a los hispanoparlantes, en este caso en forma de un mini *framework* para desarrollo de aplicaciones con múltiples pantallas no-jerárquicas ni lineales (simplemente que uno pueda saltar de una pantalla a otra sin ningún orden en particular, cuando el UITabBarController no es una opción). En realidad es [basado en este otro de Jeffrey Berthiaume](http://www.pushplay.net/blog_detail.php?id=27 " Framework for having Multiple Views in an iPhone app"), pero con la adición de NIBs (Berthiaume hace las pantallas a punta de código).

Algo importante a tener en cuenta al usar NIBs es que para que el iPhone efectivamente libere la memoria usada por NIBs con imágenes, lo mejor es cargarlas con código (pero ese es otro *post*). De pronto luego pongo un *tip* acá pero por ahora mejor visite [mi pregunta al respecto de esto en Stackoverflow](http://stackoverflow.com/questions/1482934/iphone-app-with-multiple-views-subviews-memory-is-not-being-deallocated "iphone app with multiple views/subviews: memory is not being deallocated").

Si lo que acabo de escribir suena un poco a chino avanzado (para aquellos no familiarizados con Obj-C), en parte es porque lo es (para mi Obj-C ha sido como un camino zen… el camino del ninja o algo así). Inauguro, entonces, el *tag* “iphone” en mi blog con este ZIP que pueden bajar y usar libremente (y si se le tira el proyecto que está haciendo no me eche la culpa):

[Descargar InfiniteViews](/blog/wp-content/uploads/2009/10/InfiniteViews.zip)

Para que los angloparlantes puedan llegar a este post, a continuación la versión en inglés:

**English version**

This is a a framework based on [the work of Jeffrey Berthiaume](http://www.pushplay.net/blog_detail.php?id=27 " Framework for having Multiple Views in an iPhone app") for developing NIB-based iPhone applications with non-linear, non-hierarchichal UIViewControllers, when the UITabBarController is not an option (games with multiple NIBs come to mind). Keep in mind that, in order for Obj-C to free NIBs with UIImageViews from memory, you need to load the images via code **without** using imageNamed. More info regarding this can be seen in [this question in Stackoverflow](http://stackoverflow.com/questions/1482934/iphone-app-with-multiple-views-subviews-memory-is-not-being-deallocated "iphone app with multiple views/subviews: memory is not being deallocated"):

[Download InfiniteViews](/blog/wp-content/uploads/2009/10/InfiniteViews.zip)