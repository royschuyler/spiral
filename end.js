console.log('hello world')
var finalCount = 0; //keep
var keep = 360; //keep
var windowHeight = 500; //keep
var windowWidth = 700; //keep
var lineWidth = 1; //keep
var yCentered = 0.6; //keep
var d = 500; //keep
var bAndDSize = 0.85; //keep
var aToCAdd = 15; //keep
var baseRingStart = 100; //keep
var endText = ''; //keep
var ellipseA = 1.272; //keep
var ellipseD = 30; //keep
var ellipseSize = 0.2; //keep
var ellipse = ellipse(ellipseD,ellipseA,ellipseSize,yCentered);

function multiple(ellipse){
	var ticker = 20;

	console.log(ellipse)

	var a = 1/ellipse.y[ticker]; //variable
	var wrapTotal = 140; //variable
	var tilt = ellipse.t[ticker] //variable
	var plotSize = 2; //variable


	function plotRing(start){
		var ringStart = start;
		var objOut = makeShape(d,a,bAndDSize,baseRingStart,ringStart,aToCAdd,1,wrapTotal,tilt);
		endText += plotSimple(objOut.a.x,objOut.a.y) + '</br>';
	}

	var numberOfRings = 3;
	plotRing((keep/numberOfRings)*1);
	plotRing((keep/numberOfRings)*2);
	plotRing((keep/numberOfRings)*3);

	var extra = 'blinewidth ' + lineWidth + ' all' + '</br>' + 'windowsize ' + windowWidth + ' ' + windowHeight + '</br>' + 'drawframe no' + '</br>' + 'asetticks x no' + '</br>' + 'asetticks y no' + '</br>' + 'asetminticks x no' + '</br>' + 'asetminticks y no' + '</br>' +'framewidth 0' + '</br>' + 'bstyle yes no no no no no no yes no no 0' + '</br>' + 'margins 0 0 0 0' + '</br>' + 'range x '  + -plotSize + ' ' + plotSize+ '</br>' + 'range y ' + -plotSize + ' ' + plotSize;
	var finish = 'new' + '</br>' + endText + '</br>' + extra;

	return finish
}

var finish = multiple(ellipse);
var element = document.getElementById('p1');
element.innerHTML = finish + '</br>';
