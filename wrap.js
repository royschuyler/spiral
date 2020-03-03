function makeShape(d,n,a,f1,f2,bAndDSize,baseRingStart,ringStart,aToCAdd){

  var obj = {
    a: {
      x: [],
      y: []
    },
    b: {
      x: [],
      y: []
    },
    c: {
      x: [],
      y: []
    },
    d: {
      x: [],
      y: []
    }
  }
  //*********************DERIVED*********************
  var e = 1/a;
  var aAndBStart = baseRingStart + ringStart;
  var cAndDStart = aAndBStart + aToCAdd;
  var conicE = sqrt((a*a)-1)/a;
  var radUse = radians(180)/d;
  var numbersArr = numbers(0,d,1);
  var radUseArr = numbers(0,d,radUse);
  var oneMinusCos = fancyNumbers(radUseArr,f1);
  var pathNum = arrMultiply(oneMinusCos,d/2);
  var pathRad = arrMultiply(pathNum,radUse);
  var pathx = arrSin(pathRad);
  var pathy = arrCos(pathRad,conicE);
  var ww1 = fancyww1(radUseArr,f2,n);
  var ww2 = fancyww2(ww1);
  var wrapRadArr = wrapRad(ww2);

  //MAKING WRAPS
  var wrapAx = wrapXFun(wrapRadArr,aAndBStart,pathx,1);
  var wrapAy = wrapYFun(pathx,e,wrapRadArr,aAndBStart,pathy,1);
  var wrapBx = wrapXFun(wrapRadArr,ringStart,pathx,bAndDSize);
  var wrapBy = wrapYFun(pathx,e,wrapRadArr,ringStart,pathy,bAndDSize);
  var wrapCx = wrapXFun(wrapRadArr,cAndDStart,pathx,1);
  var wrapCy = wrapYFun(pathx,e,wrapRadArr,cAndDStart,pathy,1);
  var wrapDx = wrapXFun(wrapRadArr,cAndDStart,pathx,bAndDSize);
  var wrapDy = wrapYFun(pathx,e,wrapRadArr,cAndDStart,pathy,bAndDSize);

  //PUTING WRAPS IN OBJ
  obj.a.x = wrapAx;
  obj.b.x = wrapBx;
  obj.c.x = wrapCx;
  obj.d.x = wrapDx;
  obj.a.y = wrapAy;
  obj.b.y = wrapBy;
  obj.c.y = wrapCy;
  obj.d.y = wrapDy;

  obj.a.x.reverse();
  obj.b.x.reverse();
  obj.c.x.reverse();
  obj.d.x.reverse();
  obj.a.y.reverse();
  obj.b.y.reverse();
  obj.c.y.reverse();
  obj.d.y.reverse();

  return obj
}

var d = 100;
var n = 3;
var a = 1.6;
var f1 = 1;
var f2 = 1.1;
var bAndDSize = 0.85;
var baseRingStart = 15;
var ringStart = 0;
var aToCAdd = 15;

var objOut = makeShape(d,n,a,f1,f2,bAndDSize,baseRingStart,ringStart,aToCAdd)
  //*************PLOT STUFF************************************
var plotSize = 2;
  function plot(x1,y1,x2,y2,x3,y3,x4,y4){
    var buffer = '';
    var text = '';
    for(i=0;i<x1.length - 1;i++){

      buffer += 'newbuffer' + '</br>';
      //curve
      text += 'addvalue ' + i + ' ' + x1[i] + ' ' + y1[i] + '</br>';
      text += 'addvalue ' + i + ' ' + x1[i + 1] + ' ' + y1[i +1] + '</br>';
     }
      var extra = 'blinewidth 0.5 all' + '</br>' + 'drawframe no' + '</br>' + 'asetticks x no' + '</br>' + 'asetticks y no' + '</br>' + 'asetminticks x no' + '</br>' + 'asetminticks y no' + '</br>' +'framewidth 0' + '</br>' + 'bstyle yes no no no no no no yes no no 0' + '</br>' + 'margins 0 0 0 0' + '</br>' + 'range x '  + -plotSize + ' ' + plotSize + '</br>' + 'range y ' + -plotSize + ' ' + plotSize;
      var end = buffer + text + extra;
      return end
    }
    var ready = plot(objOut.a.x,objOut.a.y)
    console.log(ready)

var element = document.getElementById('p1');
element.innerHTML = ready + '</br>';


