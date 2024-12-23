---
id: 619
title: 'Una línea de tiempo de videojuegos'
date: '2010-01-25T00:25:36+00:00'
author: blog
layout: post
permalink: /2010/01/25/una-linea-de-tiempo-de-videojuegos/
categories:
    - diseño
    - general
    - información
    - interacción
    - juegos
    - visualización
    - web
---

Hace rato que quiero hacer una línea de tiempo de la historia de los videojuegos. Combinaría varios de mis intereses: **visualización de información, historia, tiempo y videojuegos**. Actualmente dicto un curso de [historia de los videojuegos](http://designblog.uniandes.edu.co/blogs/dise3223/ "blog del curso") en el Departamento de Diseño de la Universidad de los Andes y una línea de tiempo sería útil y elegante.

Por cosas de la vida un cliente me comisionó un trabajo de una línea de tiempo (que luego linkearé una vez esté terminado) y decidí usar ese proyecto como punto de partida para mi línea de tiempo. Es por esto que puedo ahora presentar (*drumroll*):

### La línea de tiempo de la historia de los videojuegos

El link es: <http://www.mauriciogiraldo.com/vgline/beta/>

<figure aria-describedby="caption-attachment-620" class="wp-caption alignnone" id="attachment_620" style="width: 300px">[![](//www.mauriciogiraldo.com/blog/wp-content/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-0-29-53-300x190.png "principal")](/wp-wp-content/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-0-29-53.png)<figcaption class="wp-caption-text" id="caption-attachment-620">clic para ver imagen completa</figcaption></figure>

Decidí destacar **ocho tipos de eventos** en la historia de los videojuegos:

1. **personas** (a partir de su nacimiento) de importancia: creadores de juegos, científicos, artistas, empresarios.
2. **negocios**: empresas o eventos corporativos relevantes.
3. **consolas** o soportes (*hardware*) sobre el cual se ejecutan los videojuegos.
4. **juegos**
5. **accesorios y controles** que funcionan o se conectan a las consolas.
6. **tecnologías** relevantes.
7. **culturales**: eventos que han influenciado de diferentes formas el mundo de los videojuegos (libros, películas, ideas o teorías científicas, etc.).
8. **otros** eventos que sirven para contextualizar los anteriores con respecto al mundo en su momento.

Cada tipo de evento puede estar **relacionado a otros** de tres formas:

- **creación** (evento A creó evento B): por lo general usado para relacionar una persona con los juegos que ha realizado
- **inspiración/relación** (evento A está relacionado o fue inspirado por evento B)
- **series** (evento A precede a evento B): para “secuencias” de eventos (ej.: los diferentes “Marios” de Nintendo se asumen como sucesiones secuenciales)

Toda esa información presenta el problema de cómo visualizarla de la forma más clara para el usuario. Para hacer visibles las relaciones se oprime la tecla SPACEBAR:

<figure aria-describedby="caption-attachment-621" class="wp-caption alignnone" id="attachment_621" style="width: 300px">[![](//www.mauriciogiraldo.com/blog/wp-content/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-0-29-57-300x190.png "relaciones")](/wp-wp-content/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-0-29-57.png)<figcaption class="wp-caption-text" id="caption-attachment-621">relaciones entre eventos</figcaption></figure>

En el estado inicial aparecen *muchas* relaciones y aún falta poner muchísimos eventos. Es por esto que decidí **permitir al usuario encender/apagar eventos y líneas de relación** (puede usar el teclado). De esta forma, si apago todos los eventos menos personas y juegos puedo ver la misma pantalla con menos “ruido”:

<figure aria-describedby="caption-attachment-622" class="wp-caption alignnone" id="attachment_622" style="width: 300px">[![](//www.mauriciogiraldo.com/blog/wp-content/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-0-30-15-300x190.png "relaciones entre personas y juegos")](/wp-wp-content/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-0-30-15.png)<figcaption class="wp-caption-text" id="caption-attachment-622">relaciones juegos - personas</figcaption></figure>

Es difícil (hasta diría que imposible) hacer que la interfaz grafique automáticamente todos los eventos y relaciones evitando que líneas se superpongan. Sin embargo creo que la actual solución es agradable y fácil de entender una vez uno le ha metido un par de minutos a jugar (no era la idea hacer una interfaz convencional, quería experimentar un poco con eso).

Esto es lo que se ve si prendo solamente las relaciones tipo *serie* junto con los juegos:

<figure aria-describedby="caption-attachment-623" class="wp-caption alignnone" id="attachment_623" style="width: 300px">[![](//www.mauriciogiraldo.com/blog/wp-content/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-0-30-57-300x190.png "series de juegos")](/wp-wp-content/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-0-30-57.png)<figcaption class="wp-caption-text" id="caption-attachment-623">series de juegos</figcaption></figure>

Se puede apreciar que [Doom II](http://www.mauriciogiraldo.com/vgline/beta/#/338 "Doom II en la línea de tiempo") va después de [Doom](http://www.mauriciogiraldo.com/vgline/beta/#/323 "Doom en la línea de tiempo") y que hay [otro juego posterior](http://www.mauriciogiraldo.com/vgline/beta/#/342 "Doom III en la línea de tiempo") en la serie. [Riven](http://www.mauriciogiraldo.com/vgline/beta/#/267 "Riven en la línea de tiempo") es posterior a [Myst](http://www.mauriciogiraldo.com/vgline/beta/#/265 "Myst en la línea de tiempo"), etc.

### Buscador

Los usuarios son flojos (bueno, todos menos usted) y si no logran encontrar lo que están buscando en un par de segundos, desistirán e irán a otro sitio web. Adicionalmente, en grandes cantidades de información es difícil predecir por dónde van a llegar a un dato en particular. Es por esto que la línea de tiempo cuenta con un buscador:

<figure aria-describedby="caption-attachment-624" class="wp-caption alignnone" id="attachment_624" style="width: 300px">[![](//www.mauriciogiraldo.com/blog/wp-content/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-2-4-28-300x190.png "resultado de búsqueda")](/wp-wp-content/uploads/2010/01/www.mauriciogiraldo.com-screen-capture-2010-1-25-2-4-28.png)<figcaption class="wp-caption-text" id="caption-attachment-624">resultado para "nintendo"</figcaption></figure>

### ¡Viva el *open source*!

En mis años de trabajo web me he apoyado en gran cantidad de librerías/programas/contenidos web libres (conocidos en inglés como *open source*) y, [cada vez](http://sourceforge.net/projects/dmcourseware/ "Digital Media Courseware, proyecto en colaboración con Hernando Barragán") [que puedo](http://sourceforge.net/projects/spaw-cf "SPAW-CF, una versión ColdFusion de un editor de texto web"), procuro [colaborar](http://stackoverflow.com/users/160933/mga "mi perfil en Stack Overflow") de vuelta. En este caso he abierto un [proyecto en Google Code](http://code.google.com/p/vgline/) para que, el que sepa de ActionScript 3 y Flash, mire a ver que puede sacar de ahí (no pienso dar soporte a ese código, úselo bajo su propio riesgo).

### Cosas por hacer

La línea de tiempo está lejos de terminarse, pero es un comienzo. Entre las cosas que quiero hacer:

- **contenido en español**: desafortunadamente la gran mayoría del contenido sobre videojuegos disponible en la web se encuentra en inglés, y quisiera tener todo al menos en inglés y español
- **contenido completo**: falta una gran cantidad de información (¿quién dijo SEGA?) y quisiera que fuera una línea exhaustiva y precisa (fechas)
- **experimentar**: una vez haya muchos más eventos será interesante jugar visualmente con el contenido
- **compartir**: hay un [RSS con todo el contenido](http://www.mauriciogiraldo.com/vgline/rss/event/feed) de la línea y la idea es que quien quiera hacer su propia visualización pueda usar ese contenido (un [API](http://en.wikipedia.org/wiki/Application_programming_interface) sería más elegante) aunque la verdad mi servidor es un poco precario para aguantar mucho tráfico

### Detalles técnicos (y demás)

Varias personas han colaborado, ya sea ingresando eventos o dando su opinión. Entre ellos: Nicolás Arteaga, Vanessa Gómez, Andrea D’Macedo, Manuel Piñeros, Sebastián Ramírez, Rafael Tudela y Cárlos López. Si quiere colaborar o si encuentra alguna impresición en el contenido de la línea, no dude en [contactarme](../../vgline/contact).

Si quiere saber qué hay detrás de todo, la línea funciona sobre [Drupal](http://drupal.org/) (que, a su vez funciona sobre PHP, MySQL y Apache) al que me conecto desde Flash usando [AMFPHP](http://www.amfphp.org/) (Drupal tiene un [módulo para AMFPHP](http://drupal.org/project/amfphp) pero igual ha tocado meterle algo de mano para que funcione con las relaciones). Esto tiene la ventaja que se genera automáticamente una [versión texto plano del contenido](http://www.mauriciogiraldo.com/vgline/). El servidor está un poco lento (en la primera cargada ya que trae toda la base de datos) y tengo que ver como optimizar mejor todo para que ande mejor (se reciben ideas).

El proyecto ha sido apoyado por Powerflasher, la gente detrás de [FDT](http://www.fdt.powerflasher.com/) (el programa que uso para escribir [todo ese ActionScript](http://code.google.com/p/vgline/source/browse/trunk/src/com/pingpongestudio/timeline/Timeline.as "un pocotón de ActionScript") que ve en Google Code).