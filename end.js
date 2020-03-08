console.log('hello world')
var finalCount = 0;
var plotSize = 2;
var d = 100;
var n = 2;
var a = 1.6;
var f1 = 1;
var f2 = 1.1;
var bAndDSize = 0.85;
var aToCAdd = 15;
var baseRingStart = 30;
var endText = '';
var keep = 360;

function plotThreeRings(start){

	var ringStart = start;

	var objOut = makeShape(d,n,a,f1,f2,bAndDSize,baseRingStart,ringStart,aToCAdd)

	endText += plot(objOut.a.x,objOut.a.y) + '</br>';
	endText += plot(objOut.b.x,objOut.b.y) + '</br>';
	endText += plot(objOut.c.x,objOut.c.y) + '</br>';
	endText += plot(objOut.d.x,objOut.d.y) + '</br>';

}

var numberOfRings = 3;

plotThreeRings((keep/numberOfRings)*1);
plotThreeRings((keep/numberOfRings)*2);
plotThreeRings((keep/numberOfRings)*3);






var extra = 'blinewidth 0.5 all' + '</br>' + 'drawframe no' + '</br>' + 'asetticks x no' + '</br>' + 'asetticks y no' + '</br>' + 'asetminticks x no' + '</br>' + 'asetminticks y no' + '</br>' +'framewidth 0' + '</br>' + 'bstyle yes no no no no no no yes no no 0' + '</br>' + 'margins 0 0 0 0' + '</br>' + 'range x '  + -plotSize + ' ' + plotSize + '</br>' + 'range y ' + -plotSize + ' ' + plotSize;

var finish = endText + '</br>' + extra

var element = document.getElementById('p1');
element.innerHTML = finish + '</br>';
