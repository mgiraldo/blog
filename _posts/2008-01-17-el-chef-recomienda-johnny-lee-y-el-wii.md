---
id: 98
title: 'El chef recomienda: Johnny Lee y el Wii'
date: '2008-01-17T18:42:10+00:00'
author: blog
layout: post
permalink: /2008/01/17/el-chef-recomienda-johnny-lee-y-el-wii/
cc_content_license:
    - ''
cc_content_license_uri:
    - ''
cc_content_license_img:
    - ''
categories:
    - arte
    - ciencia
    - diseño
    - interacción
    - juegos
    - música
    - programación
    - video
    - visualización
    - web
---

Varios meses sin publicar acá (un poco distraído en general) pero regreso con unos buenos links. Sin más rodeos:

**Johnny Wii**

**[Johnny Lee](http://www.johnnylee.net)** es un estudiante de doctorado del [Human-Computer Interaction Institute](http://www.hcii.cmu.edu/) de la Carnegie Mellon University. Lee posee varias patentes y trabaja desarrollando versiones simples y económicas de tecnologías usualmente costosas. Como él mismo menciona en su [enunciado de investigación](http://www.cs.cmu.edu/~johnny/academic/Research%20Statement.pdf):

> My work solves real world problems of applying research concepts by simplifying implementation and reducing system cost. This does two things: first, it enables more researchers to explore the domain advancing the state of research; second, it results in a more practical commercialization increasing distribution, adoption, and overall impact.

Entre los proyectos de Lee se destaca el trabajo que hace con el **Nintendo Wii**. Usando la tecnología presente en el control del Wii, Lee ha creado desde interfases similares a las que se vieron en la película Minority Report, hasta ambientes inmersivos tridimensionales. Lee [documenta sus proyectos Wii en su sitio web](http://www.cs.cmu.edu/~johnny/projects/wii/). El software requerido para uno implementar esas interfases, si es que tiene un Wii, yo tengo el mío :), está **disponible para descarga**. Sin embargo lo que más descresta es la simplicidad como explica y presenta los proyectos, como se puede ver en el siguiente video:

<embed height="373" src="//www.youtube.com/v/Jd3-eiid-Uw&rel=1&border=1" type="application/x-shockwave-flash" width="425" wmode="transparent">  
vía [Gizmodo](http://gizmodo.com/337068/wii-headtracking-creates-3d-window-display)

Hay otro [video de la interfaz tipo Minority Report](http://youtube.com/watch?v=0awjPUkBXOU), un [video de un pizarrón electrónico](http://youtube.com/watch?v=5s5EvhHy7eQ) y [un impresionante video de pantallas plegables](http://youtube.com/watch?v=nhSR_6-Y5Kg), todos muy recomendados.

**Recomendaciones del chef**

Nos gustan las recomendaciones. A pesar de tener una amplia selección en un menú, algunos restaurantes tienen “menú del día” o “el chef recomienda”. ¿Por qué destacan un producto sobre otro? ¿Acaso no todos los platos son igual de buenos? **[Barry Schwartz](http://www.swarthmore.edu/SocSci/bschwar1/)**, psicólogo y profesor en Swarthmore College plantea en su libro [The Paradox of Choice: Why More Is Less](http://www.amazon.com/dp/0060005688/maurigiral-20) que la multiplicidad de opciones no necesariamente nos beneficia:

> Infinite choice is paralyzing, Schwartz argues, and exhausting to the human psyche. It leads us to set unreasonably high expectations, question our choices before we even make them and blame our failures entirely on ourselves.

En [su charla en TED Talks](http://www.ted.com/index.php/talks/view/id/93) Schwarz menciona ejemplos que aclaran su idea que **muchas opciones en realidad perjudican nuestro bienestar generándonos un estrés innecesario**. En un restaurante contamos con un mesero que, esperamos, nos va a dar una buena recomendación basada en la información que proveamos: “no puedo comer pescado y no me gustan los pepinillos”. En internet, sitios web como Amazon se basan en **millones de clics** que hacen los compradores para encontrar **patrones** que sivan como punto de partida para recomendaciones: de los que compraron la última película de Harry Potter una gran cantidad compró Piratas del Caribe. Entre más compras se hagan (y más compras haga usted) más precisa es la recomendación… o por lo menos eso creemos; si compra un regalo para alguien con gustos muy diferentes a usted estará “dañando” futuras recomendaciones.

![Last.fm](/blog/wp-content/uploads/2008/01/lastfm.gif)

**¿Qué me recomienda?**

¿Cómo generar un sistema de recomendación más preciso? **Entre más acertada sea la recomendación, más valioso será el sistema.** Precisamente fue esta la razón por la que Google prevaleció sobre Altavista, AskJeeves y otros buscadores que estuvieron primero: daba mejores resultados a las búsquedas (hoy día algunos pueden debatir eso pero ya Google está en una posición ultra dominante que ha sabido explotar). En el mundo musical la cosa es más complicada: ¿si me gusta “Let It Be” me van a gustar todas las canciones de los Beatles? ¿solamente las escritas por Paul McCartney? ¿sólo las baladas? ¿sólo las que son dedicadas a alguien cercano al autor? ¿las que tienen determinado patrón compositivo? Todos quisiéramos tener una emisora personalizada que pusiera los *hits* que más nos gustan pero que también nos sugiera nueva música: que no suene un reguetón después de “Hey” de Pixies… de hecho que no suene *nunca* un reguetón. Hasta el momento la mayoría de sistemas de recomendación, como los de Amazon y Google, se basan en modelos matemáticos. [Este artículo](http://www.techcrunch.com/2007/08/01/meemix-a-new-breed-of-music-personalization-is-born/) cubre (superficialmente) tres aproximaciones a este problema que se reflejan en tres sitios web: MeeMix, Pandora y Last.fm. Para los últimos dos sitios hay [mayor detalle en este otro artículo](http://www.stevekrause.org/steve_krause_blog/2006/01/pandora_and_las.html):

> Algorithmically, Pandora versus Last.fm is something like the **nature versus nurture** debate. Taking the **nature side**, Pandora’s recommendations are based on the inherent qualities of the music. Give Pandora an artist or song, and it will find similar music in terms of melody, harmony, lyrics, orchestration, vocal character and so on. Pandora likes to call these musical attributes “genes” and its database of songs, classified against hundreds of such attributes, the “Music Genome Project.”
> 
> On the **nurture side** (as in, it’s all about the people around you), Last.fm is a social recommender. It knows little about songs’ inherent qualities. It just assumes that if you and a group of other people enjoy many of the same artists, you will probably enjoy other artists popular with that group.

Otros están experimentando con la aplicación de algoritmos matemáticos ya no a la recomendación sino a la creación. Dichos algoritmos se inspiran en la evolución biológica ([reproducción, mutación, recombinación y selección](http://en.wikipedia.org/wiki/Evolutionary_algorithm)):

> EAs take two parent designs – for a boat hull, say – and blend components of each, perhaps taking the surface area of one and the curvature of another, to produce multiple hull offspring that combine the features of the parents in different ways. Then the algorithm selects those offspring it considers are worth re-breeding – in this case those with the right combination of parameters to make a better hull. The EA then repeats the process. Although many offspring will be discarded, after thousands of generations or more, useful features accumulate in the same design, and get combined in ways that likely would not have occurred to a human designer.
> 
> \[…\]
> 
> To encourage more of this kind of work, SIGEVO runs the annual [Human Competitiveness Awards](http://www.genetic-programming.org/hc2007/cfe2007.html), dubbed the “Humies”. The idea is to reward designs produced by EAs that are “competitive with the work of creative and inventive humans”.
> 
> \[…\]
> 
> Celebrated UK innovator James Dyson, inventor of the bagless vacuum cleaner, has a more emotional objection. “Evolutionary algorithms will mean the end of those exciting stories about how people made great inventions by accident,” he says. “Human ingenuity and intuition should remain crucial in making a success of any product.”

El chef recomienda estos otros posts anteriores relacionados:

- [Wii rule](http://www.mauriciogiraldo.com/blog/2007/01/30/wii-rule/)
- [Soundflavor, las obras completas de Charles Darwin…](http://www.mauriciogiraldo.com/blog/2007/01/25/soundflavor-las-obras-completas-de-charles-darwin/)
- [En busca de una vida programable](http://www.mauriciogiraldo.com/blog/2007/04/27/en-busca-de-una-vida-programable/)

**Actualización 2/6/2009:**

Desde su salto a la fama, Johnny Lee ha [hablado en las TED Talks](http://www.ted.com/talks/johnny_lee_demos_wii_remote_hacks.html) y consiguió trabajo en Microsoft donde está trabajando en Natal, un proyecto que pueden [ver mejor en su blog](http://procrastineering.blogspot.com/2009/06/project-natal.html) y en este video:

\[youtube\]http://www.youtube.com/watch?v=g\_txF7iETX0\[/youtube\]

Pueden ver una demostración de las diferentes tecnologías disponibles en Natal en la [rueda de prensa de Microsoft en E3](http://e3.gamespot.com/press-conference/microsoft-e3/) (fijarse en la parte final del video).