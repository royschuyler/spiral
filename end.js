console.log('hello world')
var finalCount = 0;
var plotSize = 2;
var d = 100;
var a = 2;
var bAndDSize = 0.85;
var aToCAdd = 15;
var baseRingStart = 0;
var endText = '';
var keep = 360;


function plotRing(start){

	var ringStart = start;

	var objOut = makeShape(d,a,bAndDSize,baseRingStart,ringStart,aToCAdd,1,640)

	endText += plotSimple(objOut.a.x,objOut.a.y) + '</br>';
	endText += plotSimple(objOut.b.x,objOut.b.y) + '</br>';
	endText += plotSimple(objOut.c.x,objOut.c.y) + '</br>';
	endText += plotSimple(objOut.d.x,objOut.d.y) + '</br>';

}

var numberOfRings = 3;


var numberOfRings = 3;

plotRing(0);
// plotRing((keep/numberOfRings)*2);
// plotRing((keep/numberOfRings)*3);

var extra = 'drawframe no' + '</br>' + 'asetticks x no' + '</br>' + 'asetticks y no' + '</br>' + 'asetminticks x no' + '</br>' + 'asetminticks y no' + '</br>' +'framewidth 0' + '</br>' + 'bstyle yes no no no no no no yes no no 0' + '</br>' + 'margins 0 0 0 0' + '</br>' + 'range x '  + -plotSize + ' ' + plotSize+ '</br>' + 'range y ' + -plotSize + ' ' + plotSize;

var finish = endText + '</br>' + extra

var element = document.getElementById('p1');
element.innerHTML = finish + '</br>';
