var last = '';
var finalCount = 0; //keep
var ellipseD = 10; //keep

function multiple(ticker){
	console.log('hello world')
	var keep = 360; //keep
	var windowHeight = 500; //keep
	var windowWidth = 700; //keep
	var lineWidth = 1; //keep
	var yCentered = 0.6; //keep
	var d = 50; //keep
	var bAndDSize = 0.85; //keep
	var aToCAdd = 15; //keep
	var baseRingStart = 10; //keep
	var endText = ''; //keep
	var ellipseA = 1.272; //keep
	var ellipseD = 10; //keep
	var ellipseSize = .2; //keep
	var numberOfRings = 3; //keep
	var spins = 1; //keep


	var ellipseFired = ellipse(ellipseD,ellipseA,ellipseSize,yCentered);
	//console.log(ellipseFired);
	var endText = '';
	var a = 1/ellipseFired.y[ticker]; //variable
	var wrapTotal = 140; //variable
	var tilt = ellipseFired.t[ticker]; //variable
	var plotSize = 2; //variable
	var spin = tick(spins,ellipseD);
	var start = baseRingStart + spin[ticker];
	//console.log(start)

	function plotRing(start){
		var objOut = makeShape(d,a,bAndDSize,baseRingStart,start,aToCAdd,1,wrapTotal,tilt);
		endText += plotSimple(objOut.a.x,objOut.a.y) + '</br>';
	}

	
	for(k=0;k<numberOfRings;k++){
		var startUse = ((keep/numberOfRings)*k)+start;
		console.log(startUse);
		plotRing(startUse);
	}

	var location = '</br>' + 'savejpg /Users/thomasschuyler/Desktop/auto2/' + ticker + '.jpg 2' + '</br>' + 'close' + '</br>';
	var extra = 'blinewidth ' + lineWidth + ' all' + '</br>' + 'windowsize ' + windowWidth + ' ' + windowHeight + '</br>' + 'drawframe no' + '</br>' + 'asetticks x no' + '</br>' + 'asetticks y no' + '</br>' + 'asetminticks x no' + '</br>' + 'asetminticks y no' + '</br>' +'framewidth 0' + '</br>' + 'bstyle yes no no no no no no yes no no 0' + '</br>' + 'margins 0 0 0 0' + '</br>' + 'range x '  + -plotSize + ' ' + plotSize+ '</br>' + 'range y ' + -plotSize + ' ' + plotSize + '</br>';
	var finish = 'new' + '</br>' + endText + '</br>' + extra + location;

	return finish
}

for(j=0;j<ellipseD;j++){
	last += multiple(j);
	finalCount = 0;
	endText = '';
}

var element = document.getElementById('p1');
element.innerHTML = last + '</br>';
