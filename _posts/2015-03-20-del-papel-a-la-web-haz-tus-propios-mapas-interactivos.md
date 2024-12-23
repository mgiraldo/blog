---
id: 937
title: 'Del papel a la web: haz tus propios mapas interactivos.'
date: '2015-03-20T11:30:18+00:00'
author: blog
layout: post
permalink: /2015/03/20/del-papel-a-la-web-haz-tus-propios-mapas-interactivos/
force_ssl:
    - '1'
categories:
    - arte
    - diseño
    - interacción
    - programación
    - tips
    - web
---

> *Esta es una traducción de [“From Paper Maps to the Web: A DIY Digital Maps Primer”](http://www.mauriciogiraldo.com/blog/2015/01/08/from-paper-maps-to-the-web-a-diy-digital-maps-primer/) realizada por [Daniela Schütte](//twitter.com/dani_schutte), coordinadora del [proyecto Memoria Chilena de la Biblioteca Nacional de Chile](http://www.memoriachilena.cl).*
> 
>  **NOTA:** hay terminología que debe mantenerse en inglés puesto que así debe escribirse en el código.

En noviembre del 2014, fui invitado a la [2<sup>a</sup> semana del libro digital](http://www.bibliotecanacional.gov.co/content/segunda-semana-del-libro-digital-2014) organizado por la Biblioteca Nacional de Colombia. La idea era presentar los proyectos que estamos desarrollando en el NYP Labs y también, dictar un taller sobre herramientas para geolocalización de mapas. Pienso que puede ser útil compartir los contenidos de ese taller, ya que integra diversas herramientas y procesos que permiten que la cartografía digital sea, hoy en día, accesible para todos.   
Se trata de un paso a paso que, utilizando herramientas de georeferenciación gratuitas, te enseñará a hacer tu propio e increíble mapa georeferenciado.

## RESUMIENDO…

[Esto](http://bit.ly/nypllabs-geo101-result) es lo que haremos. Este tutorial asume que ya tienes un mapa digitalizado y que tienes claro qué información quieres incorporar. Usualmente, los pasos son:

1. Georeferenciar el mapa escaneado para poder generar la cuadrícula (“tileset” en inglés) del mapa;
2. Procesar los datos en GeoJSON para sobreponerlos al mapa escaneado;
3. Crear un mapa personalizado que servirá de referencia como mapa de la actualidad;
4. Integrar todos los elementos en una página web interactiva.

> **NOTA:** Este tutorial asume que estás usando [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/), [Apple Safari](https://www.apple.com/safari/) o [Google Chrome](http://www.google.com/chrome/). Tendremos que jugar con la consola de desarrollo y no tengo instrucciones multinavegador.

## ¡Empecemos!

[Esto es lo que queremos hacer](http://bit.ly/nypllabs-geo101-result). Un mapa de Bogotá de 1891 [conservado en la Biblioteca Nacional de Colombia](http://www.bibliotecanacional.gov.co/ultimo2/tools/marco.php?idcategoria=45223) (el link requiere Flash Player) enriquecido con datos extraídos de un [directorio de Bogotá de 1888](http://www.bibliotecanacional.gov.co/recursos_user/bookreader/1889_sala3a_12756/).

### 1) Geo-localizando.

El primer paso, luego de digitalizar el mapa, es agregar la información geográfica. Para esto, es necesario establecer la equivalencia entre pixeles y ubicación exacta que ellos representan. Esto se conoce con el nombre de geolocalización. Este proceso distorsionará la imagen digitalizada:

![Original scan](https://i.imgur.com/UTGlBEk.jpg)   
*Imagen original digitalizada (encogida, por supuesto)*

…Al hacerla calzar con la [proyección de Mercator](https://es.wikipedia.org/wiki/Proyecci%C3%B3n_cartogr%C3%A1fica) que es la que se utiliza en la mayoría de los proyectos que utilizan mapas digitales como OpenStreetMap or Google Maps:

![Mapa en proyeccion Mercator](https://i.imgur.com/M6whllY.png)   
*Proyección Mercator de la imagen original geolocalizada*

El porcentaje de distorsión dependerá de la calidad de la muestra –el mapa digitalizado–, su estado de conservación y la proyección del mapa original. Es posible que te estés preguntando ¿y cómo ocurrirá esto? Existen softwares propietarios y open-source que permiten geolocalizar imágenes de un modo sencillo. Sin embargo, el objetivo de este tutorial es lograrlo *sin que tengas que instalar ningún programa que no sea tu navegador*.

Para empezar, anda a: [Map Warper](http://mapwarper.net/). Esta es una herramienta web que te permite subir tu mapa digitalizado para luego, a través de una sencilla interfaz, geolocalizarlo (o “rectificarlo” para hablar como cartógrafos). En el lado izquierdo verás el mapa digitalizado y en el lado derecho, la proyección Mercator.

![Map Warper](https://i.imgur.com/XveF5Q5.png)   
*Así se ve la interfaz dividida para la rectificación en Map Warper*

Fíjate en los marcadores de la imagen. Cada pin tiene un número y el mismo marcador se ve en ambos lados de la imagen. Asimismo, cada uno de ellos te servirá para darte cuenta que en el mapa digitalizado, el Norte está hacia el lado izquierdo, mientras que el Este está hacia arriba. **Si bien, cuantos más marcadores agregues, más precisa será la referenciación; debes considerar que también será más lento el procesamiento de la imagen final**. No obstante, la imagen se genera sólo una vez, así que yo no me preocuparía demasiado por eso. De lo que sí debes preocuparte es de cuántos marcadores estás dispuesto a agregar. El mapa de este tutorial, por ejemplo, tiene 101.

Una consideración final en este proceso es estar seguros que, luego de la distorsión producida por la geolocalización de la imagen, tienes una imagen de alta calidad. El proceso de distorsionar la imagen original se llama [resamplear](https://en.wikipedia.org/wiki/Image_scaling) [1](#fn-resampling "See footnote"). En las opciones avanzadas de Map Warper puedes definir si quieres que el proceso sea rápido pero de inferior calidad (seleccionando la opción “Nearest Neighbour”) o un poco más lento, pero de mejor calidad (seleccionando “Cubic Spline”):

![Resampling method selection](https://i.imgur.com/h5s13Mm.png)   
*Selecciona “Cubic Spline” en el menú “Resampling Method option”*

[Puedes ver el mapa final aquí](http://mapwarper.net/maps/4949#Preview_Map_tab). También puedes descargarlo en alta resolución en la pestaña “Export”. Sin embargo, pienso que el **insumo principal** que se obtiene de Map Warper es la **cuadrícula o baldosas** (“tileset” en inglés), como prefieran llamarlas. Y que en el fondo, es la URL que se ve aquí:

![Map Warper](https://i.imgur.com/KP75kOT.png)   
*Puedes encontrar la URL del tileset en la pestaña “Export”*

Y el template es: `http://mapwarper.net/maps/tile/4949/{z}/{x}/{y}.png`

Para seguir trabajando necesitarás esta URL así que guárdala en un lugar seguro, un bloc de notas por ejemplo, para ir dejando todos estos datos, que luego ocuparemos. Map Warper tiene un motor que utiliza la imagen geolocalizada para generar un tileset en el mapa que opera a distintos niveles del zoom. Así que sólo se nuestra la parte en la que estás trabajando [2](#fn-maptiles "See footnote"). Esta es una baldosa o una parte del tileset de ejemplo:

![a web map tile](//i.imgur.com/r3FNJ5T.png)   
*Un mapa Web está hecho de millones de estas*

### 2) Extracción de datos.

Ya tenemos el mapa. Ahora tenemos que pensar qué información queremos mostrar en él. Nuestro ejemplo utiliza [este directorio de la ciudad de Bogotá de 1888](http://www.bibliotecanacional.gov.co/recursos_user/bookreader/1889_sala3a_12756/), la capital de Colombia. Este documento tiene información valiosa sobre: decenas de miles de personas, cada una de ellas con su nombre completo, ocupación y dirección; docenas de ocupaciones diferentes (descritas en la [página 4](http://www.bibliotecanacional.gov.co/recursos_user/bookreader/1889_sala3a_12756/#page/4/mode/2up)) y avisos publicitarios (junto con la dirección de locales comerciales y los nombres de sus dueños). Este directorio constituye un interesante retrato de la vida colombiana en la segunda mitad del siglo XIX: abogados, fotógrafos y contadores comparten páginas con talabarteros y herreros. Yo me fui por el camino aburrido y decidí buscar políticos influyentes de la época, como por ejemplo el presidente en ejercicio ([página 222](http://www.bibliotecanacional.gov.co/recursos_user/bookreader/1889_sala3a_12756/#page/222/mode/2up), primero en la segunda columna). La [lista](https://gist.githubusercontent.com/mgiraldo/adc66ff03fc41c88a9ef/raw/db06e19048e1bee737c8897b65517e2e2916af44/directorio%20bogota%CC%81%201888.csv) tiene los nombres de siete personas: cuatro presidentes, un vicepresidente, un ministro, y un presidente en ejercicio [3](#fn-caveat "See footnote"). En ella se incluye:

- nombre;
- cargo (El cargo más alto en el poder ejecutivo colombiano);
- período de ejercicio;
- página (en la que aparece en el directorio);
- ocupación (de acuerdo con la tipificación del directorio);
- dirección;
- La URL de una fotografía de Wikimedia (en caso de existir una);
- latitud, longitud (un marcador de posición del centro de Bogotá que modificaremos en esta etapa).

[Descarga la lista en CSV](https://gist.githubusercontent.com/mgiraldo/adc66ff03fc41c88a9ef/raw/db06e19048e1bee737c8897b65517e2e2916af44/directorio%20bogota%CC%81%201888.csv).

Puedes crear tu propia lista con otros datos que te parezcan más interesantes o más útiles. **Sólo debes asegurarte de incluir una columna para indicar la “latitud” y la “longitud”**  y guardarla en una [lista de valores separados por comas](https://es.wikipedia.org/wiki/CSV).

#### GeoJSON.

Hasta acá, tus datos están almacenados en una lista de valores separados por comas, pero las herramientas para geolocalización en la web, generalmente utilizan el [estándar de datos GeoJSON](http://geojson.org/). GeoJSON está basado en JSON que es una de las formas más populares de estructurar datos en la web. GeoJSON utiliza el concepto de “atributos” para describir los datos geográficos. Estos atributos pueden ser puntos (como en este caso) o [formas geométricas complejas](https://en.wikipedia.org/wiki/GeoJSON) como líneas sencillas, compuestas o polígonos. Cada atributo es descrito por su geometría, en inglés `geometry`, (el punto, la línea o el polígono en sí mismo) y por sus propiedades, en inglés `properties`, que en el fondo son todos los datos extra que quieras asociar a ellos (en este caso, el nombre de la persona, su dirección, fotografía, etc.). Por ejemplo[4](#fn-geojson "See footnote"):

<script src="https://gist.github.com/mgiraldo/93c3457c4f512b34433f.js?file=example.json"></script>

Ahora tenemos que convertir la hoja de datos en un objeto GeoJSON y actualizar los valores de latitud y longitud, en inglés `latitude` y `longitude`, de los marcadores de posición. Para esto, utilizaremos el mismo mapa. Pero necesitaremos una herramienta que nos permita generar el archivo GeoJSON y manipularlo fácilmente.

Lo que nos lleva a [GeoJSON.io](http://geojson.io/). Es “una rápida y sencilla herramienta para crear, visualizar y compartir mapas”. GeoJSON.io tiene una elegante interfaz que nos permitirá crear el archivo GeoJSON que necesitamos.

[Carga la página de GeoJSON.io](http://geojson.io/) en una nueva pestaña del navegador. Lo primero que verás será un mapa por defecto en un zoom out completo. Entonces, tendremos que intervenir un poco. Haz click con el botón derecho en algún punto del mapa y selecciona `Inspeccionar elemento` (o `Inspect element` si tienes el navegador en inglés):

![Right-Click -/> Inspect Element” title=””>  </p>
<p><em>Click botón derecho ? Inspeccionar elemento</em></p>
<p>Al hacer esto, tendrás una visualización avanzada para desarrolladores, esto significa que podrás ver y modificar el código de la página que estás viendo (en este caso, la interfaz del mapa). GeoJSON.io incluye una interfaz para programación (API) que te permitirá también, controlar el despliegue del mapa. El núcleo de este sitio es <a href=](https://i.imgur.com/EIqHCRu.gif)MapBoxJS, que está construido en [Leaflet](http://leafletjs.com/), una “librería JavaScript de código abierto para el desarrollo de mapas interactivos compatibles con dispositivos móviles”. Menciono ambos asuntos porque, en la mayoría de los casos, lo que funciona en uno de ellos, funcionará también en el otro. (*Es importante* que leas toda la documentación antes de tomar cualquier decisión). De ahora en adelante, me referiré a Leaflet en lugar de MapBoxJS.

En la pestaña “Consola” (o “Console” en inglés) verás algo de texto y, al final, un cursor en el que podrás ejecutar el código JavaScript. También te darás cuenta que hay algunos comentarios del [creador de GeoJSON.io](https://twitter.com/tmcw). Escribe esto en el área que mencioné y presiona ENTER (fíjate en el GIF animado de más abajo):

<script src="https://gist.github.com/mgiraldo/93c3457c4f512b34433f.js?file=geojsonio1.js"></script>

Con esto, lograrás que el mapa se centre y haga un “zoom” en Bogotá, Colombia, el área comprendida por el mapa de 1891. Ahora escribe esto:

<script src="https://gist.github.com/mgiraldo/93c3457c4f512b34433f.js?file=geojsonio2.js"></script>

y presiona ENTER. Al hacerlo, agregarás el tileset que ya habíamos creado. Fíjate que la línea de código que acabamos de escribir **incluye la URL que copiamos en el paso 1**. El resultado, debiera verse más o menos así:

![Antes y despues de ejecutar los comandos](https://i.imgur.com/81lQIRG.gif)   
*Una rápida “intervención” a GeoJSON.io*

Ahora, puedes cerrar la ventana de consola (*No* la ventana del navegador).

> **NOTA:** Será necesario que apliques este código cada vez que cargues GeoJSON.io ya que *no guarda* las modificaciones vía consola. Lo que *sí* puedes hacer es registrarte y así guardar los datos que agregaste a tu mapa.

#### Agregando datos a GeoJSON.io.

Ahora usaremos la versión modificada del mapa como base para geolocalizar correctamente la [lista CSV de presidentes](https://gist.githubusercontent.com/mgiraldo/adc66ff03fc41c88a9ef/raw/db06e19048e1bee737c8897b65517e2e2916af44/directorio%20bogota%CC%81%201888.csv). Arrastra la lista CSV que descargaste sobre el mapa:

![drag and drop magic](https://i.imgur.com/YL0VrXE.gif)   
*La magia de arrastrar y soltar en GeoJSON.io*

Te darás cuenta cómo los datos inmediatamente son convertidos a GeoJSON (panel derecho) y el mapa muestra los marcadores de cada presidente (panel izquierdo). Aparecerá un pequeño mensaje verde (arriba a la izquierda) que indica que siete atributos fueron importados.

Pero… ¡El mapa de 1891 desapareció! No te asustes. Esto sólo significa que el mapa ha hecho un zoom “demasiado cerca de la tierra” y la URL del tileset no tiene imágenes a esa escala. Haz un zoom out y verás que el mapa de 1891 aparece otra vez.

#### Moviendo lo marcadores.

Como podrás darte cuenta, los marcadores de la lista CSV quedaron geolocalizados, uno encima de otro, en la misma ubicación, la [Plaza de Bolívar](https://es.wikipedia.org/wiki/Plaza_de_Bol%C3%ADvar) en Bogotá. Así que tendremos que moverlos a su ubicación correcta. Si haces click sobre el marcador gris, verás los datos adicionales del primero en la lista (el General Rafael Reyes). Su dirección, en ese entonces, era 50, Calle 16 (el número 50 de la Calle 16). Encontrar la dirección en el mapa será relativamente sencillo ya que cada cuadra tiene la numeración de inicio y término escrita en cada esquina. Si te fijas, la numeración de las “Carreras” (vías verticales) aumenta hacia el Norte con los números pares e impares de Este a Oeste, mientras que la numeración de las “Calles” (vías horizontales) aumenta hacia el Oeste con los números pares e impares de Norte a Sur:

![Address numbers](https://i.imgur.com/RAQxw8q.gif)

Como puede ser que no sepamos exactamente dónde estaba una dirección, pondremos los marcadores en su ubicación estimada. Para hacerlo, es necesario que actives el modo de edición, haciendo click en el ícono editar:

![Edit icon](https://i.imgur.com/52FWtfw.png)

Los marcadores tendrán ahora un borde rosado y los podrás mover donde quieras. Una vez ubicados en su posición correcta, recuerda guardar, haciendo click sobre el botón “Save”:

![Moving points around](https://i.imgur.com/LEfv82X.gif)

Hay algunas direcciones más complejas que otras, pero como podrás imaginarte, esta es una tarea bastante agradable, porque literalmente, te pierdes en las calles de Bogotá de 1891. Un aspecto interesante de este mapa es que los edificios de gobierno aparecen coloreados con los tonos de la [bandera colombiana](https://es.wikipedia.org/wiki/Bandera_de_Colombia). Cuando encuentres la casa de [Rafael Núñez Moledo](https://es.wikipedia.org/wiki/Rafael_Núñez), el entonces presidente en ejercicio, notarás que su dirección coincide con uno de esos edificios del color de la bandera colombiana; esa es la [Casa de Nariño](https://es.wikipedia.org/wiki/Casa_de_Nari%C3%B1o).

#### Guardando el GeoJSON.

Ahora, tenemos que generar la versión final del archivo GeoJSON para crear el mapa interactivo. Simplemente selecciona `Save > GeoJSON` en el menú de GeoJSON.io. Un archivo llamado `map.geojson` se descargará en tu computador. Si prefieres, puedes [descargar el que hice yo](https://gist.githubusercontent.com/mgiraldo/924b6bf7cc34402d2cae/raw/377d533d5047905ccbb91d1535cfb604468ea0d0/directorio%20bogota%CC%81%201888.geojson).

### 3) Haciendo un mapa del 2014 personalizado (opcional).

En verdad, lo que queremos es poder comparar cómo ha cambiado Bogotá desde 1891 a nuestros días. Entonces, lo que necesitamos es un “mapa base”, que básicamente, es lo que aparece en tu pantalla cuando cargas GeoJSON.io: un mapa (esperemos, exacto) “color vainilla” de calles del mundo actual. Puedes usar la cuadrídula estándar de [OpenStreetMap](http://wiki.openstreetmap.org/wiki/Tiles) o también, puedes usar un servicio como [MapBox](https://www.mapbox.com/) para generar un mapa completamente a tu gusto (MapBox usa datos OSM). MapBox ofrece bastantes alternativas: te deja cambiar los colores, elegir qué se muestra (calles, edificios, parques, etc.) e incluso te permite usar imágenes satelitales.

No voy a describir cómo hacer tu propio mapa en MapBox. Mejor, puedes leerlo en su [excelente tutorial](https://www.mapbox.com/mapbox-studio/style-quickstart/). Una vez que estén listos, tienen que guardar el identificador del mapa que crearon, que es algo así como `usuario.k53dp4io`. Puedes usar la página de proyectos de MapBox para ver todos sus mapas y copiar fácilmente el ID al bloc de notas:

![MapBox Map ID](https://i.imgur.com/se6Hmtd.png)

> **NOTA:** Si no quieren explorar el proceso de personalizar su propio mapa, pueden usar el ID de alguno de los ejemplos de MapBox.

### 4) El montaje final.

Ya tenemos todas las piezas para ensamblar nuestro mapa interactivo. Para eso tenemos:

- los datos del mapa en formato GeoJSON;
- el tileset del mapa de 1891;
- el tileset del mapa actual o el ID de MapBox del mapa de 2014.

El prototipo del mapa interactivo lo armaremos en [JSFiddle](http://jsfiddle.net/), una herramienta que permite crear y testear rápidamente código HTML/JavaScript/CSS. Revisa [este breve tutorial](http://doc.jsfiddle.net/tutorial.html) para que te familiarices con la interfaz.

JSFiddle tiene cuatro paneles principales:

- Código HTML (arriba a la izquierda);
- Código CSS (arriba a la derecha);
- Código JavaScript (abajo a la izquierda);
- Resultado final (abajo a la derecha).

JSFiddle se encarga de ensamblar los componentes de los tres códigos en el resultado, cada vez que presionas “Run” (arriba, barra azul).

#### HTML &amp; CSS.

En este ejemplo, la parte de HTML y CSS son *muy* sencillas. Sólo necesitamos un área rectangular en la página, en la que ubicaremos el mapa y todos sus controles.

Primero, el elemento HTML en el que ubicaremos el mapa. Escribe o copia y pega esto en el panel HTML:

<script src="https://gist.github.com/mgiraldo/93c3457c4f512b34433f.js?file=div.html"></script>

Con este código, creas un elemento `div` cuyo identificador es `map` y, como te podrás imaginar, contendrá al mapa. Ahora, necesitamos darle “estilo” a este elemento (debe tener alto, ancho, altura y, si queremos, bordes y otros atributos). El estilo se controla con el código CSS. Escribe o copia y pega lo siguiente en el panel CSS:

<script src="https://gist.github.com/mgiraldo/93c3457c4f512b34433f.js?file=style.css"></script>

Al hacer esto, el elemento, cuyo identificador es `map`, tendrá una altura y un ancho de 400 pixeles (el prefijo `#` significa “ID” en CSS). Por supuesto que pueden hacer el rectángulo más grande (si tu monitor es lo suficientemente grande) o aplicarle algunos otros atributos entre las llaves `{ }` (por ejemplo: `background-color: #f00;` para un fondo rojo, si quieres ver el elemento sin el mapa) pero en realidad, preferiría que lo mantuvieras lo más sencillo posible.

Si presionas “Run” en este momento, no verás mucho (a menos que hayas añadido algún color de fondo o borde al elemento). En cualquier caso, ese es *todo* el HTML y CSS que necesitas por el momento.

#### Agregar el MapBoxJS.

Para visualizar el mapa y hacerlo interactivo necesitaremos de algunas piezas adicionales y un poco de JavaScript. Mencioné hace un rato [Leaflet](http://leafletjs.com/) y [MapBoxJS](https://www.mapbox.com/mapbox.js/). Leaflet está incluido en MapBoxJS, así que más tarde nos ocuparemos de él.

MapBoxJS se compone de dos archivos separados: uno JS y otro CSS. Ya tenemos una idea de qué es lo que hace el CSS. El archivo JavaScript contiene toda la magia del mapeo interactivo. Estas son las URLs de los archivos en cuestión (Esta no es la más reciente versión de MapBoxJS pero no hay que preocuparse, funcionará):

Archivo CSS:

`https://api.tiles.mapbox.com/mapbox.js/v1.5.0/mapbox.css`

Archivo JavaScript:

`https://api.tiles.mapbox.com/mapbox.js/v1.5.0/mapbox.js`

En la columna de la izquierda de JSFiddle busca la sección “External Resources”. Ahora, copia estas URLs y pégalas en la caja `JavaScript/CSS URI` y luego presiona el botón `+`. Verás que algo como esto aparece después de hacerlo:

![jQuery in JSFiddle](https://i.imgur.com/FTBBQmq.png)   
*Este es tu “fiddle” una vez has agregado los dos archivos de MapBoxJS*

Esto hará que JSFiddle cargue los archivos la próxima vez que hagas clic en el botón “Run”.

#### ¡Hola mapa!

¡*Ahora sí* viene la parte que hemos estado esperando! Escribamos unas líneas de JavaScript para poder ver el mapa de 1891. Copia y pega esto en el panel de JavaScript:

<script src="https://gist.github.com/mgiraldo/bb98fd95e3dc9166e39a.js?file=x1.js"></script>

…y presiona “Run”. Esto es lo que deberías ver:

![Hello map](https://i.imgur.com/C1bj4Pj.png)   
*¡Tu primer mapa web!*

Gracias a Leaflet, es *así* de fácil trabajar con mapas web.

> **NOTA:** No voy a entrar en detalles respecto de los diferentes aspectos de las APIs de Leaflet o MapBoxJS. Cada uno tiene sus propios [tutoriales](http://leafletjs.com/examples.html) y [ejemplos](https://www.mapbox.com/mapbox.js/example/v1.0.0/).

Lo que sí voy a hacer es dar algunos *snippets* y explicar, en términos sencillos, para qué sirven. La idea es que copies, pegues, hagas clic en “Run” y que la **magia** ocurra[5](#fn-magic "See footnote"). Luego podrás investigar, probar y resolver cómo hacer otras cosas por tu cuenta.

#### Trabajando con múltiples tilesets.

Habrás notado que el mapa es completamente blanco, a excepción del mapa de 1891. Esto es bueno y ocurre porque el tileset sólo tiene el mapa rectificado y nada más. Necesitamos un tileset adicional, del 2014, para poder comparar (podemos usar el ID de un mapa de MapBox, en caso de que no hayas creado el tuyo en el paso 3 de más arriba). Reemplazaremos el código JS con uno nuevo que incluirá:

- Información de la fuente y/o atribución del mapa;
- el tileset del 2014;
- una herramineta de control que nos permitirá cambiar entre un tileset y otro.

Este código debe **reemplazar el anterior código JS:**

<script src="https://gist.github.com/mgiraldo/bb98fd95e3dc9166e39a.js?file=x2.js"></script>

Si miras con detención este código, te darás cuenta que es bastante similar al que habíamos usado antes. La diferencia principal está en los datos de atribución y en los tilesets de MapBox (que incorporamos con su respectivo ID del mapa). La herramienta de control, son sólo dos líneas: la primera, que crea la variable “mapa base” y que soporta los tilesets (puedes agregar cuantos sets quieras); y la segunda, que crea “el control” y lo incrusta en el mapa. Veamos el control en acción:

![Tile set magic](https://i.imgur.com/EHuMxuX.gif)   
*Fíjate cómo cambia la atribución (al pie del mapa) al cambiar de un tileset a otro*

¡Ya casi terminamos!

Ahora lo único que falta es que podamos desplegar nuestros datos. Leaflet hace este proceso bastante sencillo porque es soporte nativo de GeoJSON. Bastan unas pocas líneas de código… pero **primero debes borrar la linea que hace zoom** `map.setView([4.598056, -74.075833],14)`. Ahora pega este código en la parte de abajo del panel JS:

<script src="https://gist.github.com/mgiraldo/bb98fd95e3dc9166e39a.js?file=x3.js"></script>

Debes copiar el código GeoJSON del archivo de texto que descargaste de GeoJSON.io y pegarlo en donde dice `'pegar_geojson_aca_mantener_comillas'`. **Asegúrate de conservar las comillas sencillas: `''`**. Hecho el cambio, esa línea debiera verse como esta (por brevedad reemplacé el contenido de las “features” con un …):

<script src="https://gist.github.com/mgiraldo/93c3457c4f512b34433f.js?file=x4.js"></script>

Ahora, reemplacemos la función del zoom con `map.fitBounds(geolayer.getBounds())`. Esto hace al mapa “más inteligente”: en lugar de especificar de forma manual la longitud, latitud y el nivel del zoom, dejamos que Leaflet calcule el área que ocupa el set de marcadores con `getBounds()` y entregue ese valor al mapa mediante la función `fitBounds()`. Voilá, el zoom del mapa muestra ahora todos los marcadores. Si quieres agregar algunos más… ¡el área cambiará automáticamente!

También puedes agregar puntos u otra información adicional sobrepuesta en el control de capas. Sólo tienes que crear una variable similar a la que creamos anteriormente y actualizar el código de creación, por ejemplo:

<script src="https://gist.github.com/mgiraldo/bb98fd95e3dc9166e39a.js?file=x5.js"></script>

Cuando presiones “Run” deberás ver algo así:

![Hello pins](https://i.imgur.com/jE881o7.png)   
*El mapa con datos*

> **NOTA:** Asegúrate de mover el código de creación del control `L.control.layers` **por debajo de donde está el GeoJSON**. La variable `geolayer` necesita existir para poder ser añadida a as otras capas. Puedes guiarte por [mi resultado en JSFiddle](http://bit.ly/1K1RcRd) si necesitas más detalles.

Otra línea importante es la de la función `L.geoJson()` que es la encargada de regular el comportamiento de todos los atributos descritos por `map.geojson`. Leaflet/MapBoxJS tiene por defecto íconos azules para los marcadores, pero [pueden ser modificados si quisieran](http://leafletjs.com/reference.html#icon). `L.geoJson()` también permite agregar interacción a los marcadores. Si ahora hacemos click con el botón derecho, no pasa nada.

#### Marcadores que cobran vida.

Me gustaría que, al hacer clic sobre un marcador, apareciera una ventana o “popup” con la información que asociamos a cada uno de ellos (en las `properties` de cada punto). Para lograrlo, tenemos que hacer dos cosas:

1. Crear una función que construya y despliegue el popup para cada punto (marcador).
2. Modificar el llamado `L.geoJson()` para que utilice esta función.

Leaflet tiene la función `bindPopup()`, que hace precisamente eso: dibuja una caja con un texto para un determinado `layer` (el término en inglés para los elementos que se dibujan en el mapa). Este texto puede incluir HTML. Copia y pega este código, debajo de todo lo que llevas hasta el momento:

<script src="https://gist.github.com/mgiraldo/93c3457c4f512b34433f.js?file=x6.js"></script>

Esta función `showPopup()` recibe un `feature`, la pieza de GeoJSON que contiene toda la información (geometría y propiedades), y un `layer` (en nuestro caso, el marcador azul). Estos dos parámetros son procesados automáticamente por la función `L.geoJson()`. `showPopup()` extrae las propiedades de cada atributo (nombre, dirección, etc.) y las articula en una cadena HTML que luego es usada para crear el popup.

Pero para que funcione, tenemos que conectar la función `showPopup` a algo. Para hacerlo, debemos modificar la actual línea de `L.geoJson` de la siguiente forma:

<script src="https://gist.github.com/mgiraldo/93c3457c4f512b34433f.js?file=x7.js"></script>

…solamente estamos agregando `, {onEachFeature: showPopup}` después de `geodata`. Lo que hicimos fue decirle a Leaflet que aplique la función `showPopup` a cada atributo en GeoJSON.

> **NOTA:** Si nuestro GeoJSON tiene multiples tipos de atributos (por ejemplo: puntos, líneas o polígonos) es importante tener en mente que **la misma función será aplicada a cada uno de ellos**. Por ejemplo, los polígonos tienen un área, pero los puntos no; entonces será necesario que revisemos si el atributo sobre el que clickeamos tiene área antes de intentar usar la función `fitBounds` en el mapa.

Al cargar el mapa y hacer clic sobre un marcador, debiera verse así:

![A popup!](https://i.imgur.com/gz58uZb.png)

Se ve bastante bien y todo, pero… ¿no sería mejor *ver* la foto y quizás linkear a la página que corresponde del directorio?

¡Hagamos eso!

Remplacemos la función `showPopup` con esta:

<script src="https://gist.github.com/mgiraldo/93c3457c4f512b34433f.js?file=x8.js"></script>

Lo que acabamos de hacer fue agregar una cosa más para el popup: Si `key` es igual a “Page” linkeamos al directorio y si `key` es igual a “Photo” construimos un contenedor para la imagen que la despliega a 150 pixels de alto (sólo en caso de que sea demasiado grande).

Así es como se veía el Sr. Núñez:

![Rafael Núñez bio](https://i.imgur.com/0LFioyt.png)

…digno de un presidente!

Y, ahora sí, **casi terminamos**.

#### Empaquetando.

Lo último sería compilar estos tres *snippets* de código en una página HTML para que puedas publicar tu nuevo mapa en alguna parte. No te preocupes, para esto hay otra plantilla que tiene marcados los sitios en los que debes pegar el CSS, HTML y JS. Guarda todo el código como un archivo `.html` y publícalo donde quieras:

<script src="https://gist.github.com/mgiraldo/bb98fd95e3dc9166e39a.js?file=template.html"></script>

[Puedes ver el mapa terminado aquí](http://bit.ly/nypllabs-geo101-result). Sólo hice algunas modificaciones mínimas al CSS para que se viera mejor en la ventana del navegador.

Ojalá este tutorial sea útil. [Cuéntame](https://twitter.com/mgiraldo) si tienes algún comentario o sugerencia.

<div class="footnotes" markdown="1">---

1. Similar a lo que ocurre [con la música](https://en.wikipedia.org/wiki/Sample_rate_conversion) cuando se convierte de calidad CD a MP3. [↩](#fnref-resampling "Return to article")
2. [Esta explicación puede ser útil](https://www.mapbox.com/foundations/how-web-maps-work/) para una introducción más profunda sobre cómo funcionan los tilesets en los mapas web. [↩](#fnref-maptiles "Return to article")
3. No hice una investigación acuciosa de los nombres, así que puede ser (aunque es improbable) que existan homónimos. [↩](#fnref-caveat "Return to article")
4. De [GeoJSON.org](http://geojson.org/) [↩](#fnref-geojson "Return to article")
5. ¡Todo debiera funcionar así! [↩](#fnref-magic "Return to article")

</div>