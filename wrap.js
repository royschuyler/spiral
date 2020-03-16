function makeShape(d,a,bAndDSize,baseRingStart,ringStart,aToCAdd,sizeForColor,wrapTotal){

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
  var aAndBStart = radians(baseRingStart + ringStart);
  var cAndDStart = aAndBStart + radians(aToCAdd);
  var conicE = sqrt((a*a)-1)/a;
  var radUse = radians(180)/d;
  var wrapRadUse = radians(wrapTotal)/d;
  var numbersArr = numbers(0,d,1);
  var pathRadArr = numbers(0,d,radUse);
  var pathx = arrSin(pathRadArr);
  var pathy = arrCos(pathRadArr,conicE);
  var wrapRadArr = numbers(0,d,wrapRadUse);

  //MAKING WRAPS
  var wrapAx = wrapXFun(wrapRadArr,aAndBStart,pathx,sizeForColor);
  var wrapAy = wrapYFun(pathx,e,wrapRadArr,aAndBStart,pathy,sizeForColor);
  var wrapBx = wrapXFun(wrapRadArr,aAndBStart,pathx,bAndDSize);
  var wrapBy = wrapYFun(pathx,e,wrapRadArr,aAndBStart,pathy,bAndDSize);
  var wrapCx = wrapXFun(wrapRadArr,cAndDStart,pathx,sizeForColor);
  var wrapCy = wrapYFun(pathx,e,wrapRadArr,cAndDStart,pathy,sizeForColor);
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

  // console.log(obj)

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

  //*************SIMPLE PLOT************************************

function plotSimple(x,y){
  var buffer = '';
  var text = '';
  var color = 0;
  var width = 1;
  for(i=0;i<x.length - 1;i++){

    buffer += 'newbuffer' + '</br>';
    //curve
    text += 'addvalue ' + finalCount + ' ' + x[i] + ' ' + y[i] + '</br>';
    text += 'addvalue ' + finalCount + ' ' + x[i + 1] + ' ' + y[i +1] + '</br>';
    text += 'bcolor ' + color + ' ' + color + ' ' + color + ' ' + finalCount + '</br>'
    text += 'blinewidth ' + width + ' ' + finalCount + '</br>';

    finalCount++
   }
    var line = buffer + text;
    return line
  }





