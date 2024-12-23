---
id: 479
title: 'pop goes the weasel'
date: '2009-10-20T20:31:38+00:00'
author: blog
layout: post
permalink: /2009/10/20/pop-goes-the-weasel/
categories:
    - ciencia
    - general
    - programación
    - visualización
---

<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" height="150" width="500"><param name="src" value="http:/blog/assets/uploads/2009/10/weasel.swf"></param><embed height="150" src="http:/blog/assets/uploads/2009/10/weasel.swf" type="application/x-shockwave-flash" width="500"></embed></object>

[Inventando el agua que moja](http://en.wikipedia.org/wiki/Weasel_program)

Para hacer funcionar el código, cree un nuevo documento de Flash ActionScript 3 y meta tres textfields con nombre de instancia `status_txt`, `link_txt`, y `weasel_txt`. Puede cambiar el texto objetivo (variable `target`) por cualquier otro que tenga letras de la A a la Z (mayúsculas), espacio, punto y signo de exclamación. Si quiere más letras tiene que modificar la funcion `randomLetter()`.

El máximo número de generaciones que me ha generado para este texto es de 1452.

El código (AS3):

```
var target:String = "O TRUE APOTHECARY! THY DRUGS ARE QUICK. THUS WITH A KISS I DIE.";
var current:String = "";
var numSiblings:Number = 100;
var variation:Number = 5;
var stepsNeeded:Number = 0;
var generation:Array = [];
var timer:Timer = new Timer(10);

function newGeneration():Array {
	var i:Number;
	var thisGeneration:Array = [];
	for (i=0;i < numSiblings;++i) {
		thisGeneration.push(createSibling(current));
	}
	return thisGeneration;
}

function newParent():String {
	var i:Number, r:String = "";
	for (i=0;i < target.length;++i) {
		r += randomLetter();
	}
	return r;
}

function createSibling(dad:String):String {
	var i:Number;
	var sibling:String = "";
	for (i=0;i < dad.length;++i) {
		if (Math.random()*100<variation dad.charat="" else="" for="" function="" generation.length="" i:number="" if="" j:number="" maxq="0;" maxqindex="0;" n:number="Math.floor(Math.random()*28)+62;" qualification.length="" qualification.push="" qualification:array="[];" qualifygeneration="" r=" " r:string="" randomletter="" return="" sibling="" tempq="0;" tempq:number="0;" var="">maxQ) {
			maxQ = qualification[i];
			maxQIndex = i;
		}
	}
	return maxQIndex;
}

function parseGeneration(event:TimerEvent) {
	status_txt.htmlText = "GENERACIONES: " + stepsNeeded;
	generation = newGeneration();
	current = generation[qualifyGeneration()];
	weasel_txt.text = current;
	if (current == target) {
		timer.stop();
		status_txt.htmlText = "COMPLETADO LUEGO DE " + stepsNeeded + " GENERACIONES";
		link_txt.htmlText = "<a href="\"event:restart\"">OTRA VEZ</a>";
	} else {
		stepsNeeded++;
	}
}

function doClick (e:TextEvent) {
	if (e.text=="stop") {
		link_txt.htmlText = "<a href="\"event:continue\"">CONTINUAR</a>";
		timer.stop();
	} else if (e.text=="continue") {
		link_txt.htmlText = "<a href="\"event:stop\"">DETENER</a>";
		timer.start();
	} else if (e.text=="restart") {
		init();
	}
}

function init () {
	stepsNeeded = 0;
	current = newParent();
	timer.start();

	var style:StyleSheet = new StyleSheet();
	var link:Object = new Object();
	link.textDecoration = "underline";
	style.setStyle("a:hover", link);
	link_txt.styleSheet = style;
	link_txt.htmlText = "<a href="\"event:stop\"">DETENER</a>";
}

link_txt.addEventListener(TextEvent.LINK, doClick);
timer.addEventListener("timer",parseGeneration);

init();
</variation>
```