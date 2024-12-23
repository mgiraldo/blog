---
id: 760
title: 'Aventuras con Bancolombia: Episodio II La Guerra de los Navegadores'
date: '2010-11-07T13:58:08+00:00'
author: blog
layout: post
permalink: /2010/11/07/aventuras-con-bancolombia-episodio-ii-la-guerra-de-los-navegadores/
categories:
    - crítica
    - general
    - web
---

Ya [anteriormente me había quejado](http://www.mauriciogiraldo.com/blog/2010/01/13/%c2%bfpor-que-la-sucursal-virtual-de-bancolombia-apesta/) de la Sucursal Virtual **Empresas** de Bancolombia. Sin embargo me parece buena idea seguir chuzando al burro, de pronto solo porque así podré calmar el estrés que me produce usar semejante porquería de servicio.

Si algún empleado de Bancolombia con capacidad (y ganas) puede arreglar este “problemilla” le agradecería enormemente (no solo porque estoy *pagando* por ese servicio). Este problema se puede reproducir en MacOS en cualquier navegador (probé en Firefox 3.6.12, Safari 5.0.2 y Chrome 7.0.517.44):

Si quiero transferir a otra cuenta, en este caso a un proveedor, debo usar esta interfaz (primeros campos completados ya):

[![](/blog/assets/uploads/2010/11/01-300x173.png "Antes de seleccionar fecha")](/blog/assets/uploads/2010/11/01.png)

Necesito asignar una fecha para la transferencia así que hago clic en el botón ese que parece un calendario. Aparece el diálogo de selección de fecha:

[![](/blog/assets/uploads/2010/11/02-300x191.png "Seleccionando fecha")](/blog/assets/uploads/2010/11/02.png)

Selecciono hoy 7 de Noviembre de 2010. El diálogo de fecha se cierra y llena el campo “Fecha aplicación (dd/mm/aaaa)”:

[![](/blog/assets/uploads/2010/11/03-300x166.png "Fecha seleccionada")](/blog/assets/uploads/2010/11/03.png)

Todo parece estar bien así que hago clic en “Continuar” y sucede esto:

[![](/blog/assets/uploads/2010/11/04-300x170.png "¿Fecha inválida? WTF")](/blog/assets/uploads/2010/11/04.png)

¿Cómo así que “*La fecha no puede estar antes de la presente*“? Pues si se fija, el campo de fecha ahora **tiene un cero menos** y dice “07/11/201”. ¡Quien hizo el Javascript de alguna forma está modificando/validando la fecha y en el proceso elimina el último caracter del campo! Adivine: esta interfaz **solo funciona bien en Internet Explorer para Windows**. Obviamente para quien lo hizo [el 55% de los navegadores](http://en.wikipedia.org/wiki/Usage_share_of_web_browsers) no son importantes. Y no, si cambio manualmente la fecha tampoco funciona.