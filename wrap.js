function makeShape(d,n,a,f1,f2,bAndDSize,baseRingStart,ringStart,aToCAdd,sizeForColor){

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



  //*************HARD PLOT************************************

function plotHard(x1,y1,x2,y2,x3,y3,x4,y4){
  var buffer = '';
  var text = '';
  var color = 1;
  var width = 1;

  for(i=0;i<x1.length - 1;i++){

      buffer += 'newbuffer' + '</br>';
      buffer += 'newbuffer' + '</br>';
      buffer += 'newbuffer' + '</br>';
      buffer += 'newbuffer' + '</br>';
      buffer += 'newbuffer' + '</br>';
      //a to c
      text += 'addvalue ' + finalCount + ' ' + x1[i] + ' ' + y1[i] + '</br>';
      text += 'addvalue ' + finalCount + ' ' + x2[i] + ' ' + y2[i] + '</br>';
      text += 'bcolor ' + color + ' ' + color + ' ' + color + ' ' + finalCount + '</br>'
      text += 'blinewidth ' + width + ' ' + finalCount + '</br>';

      finalCount++
      //c to d
      text += 'addvalue ' + finalCount + ' ' + x2[i] + ' ' + y2[i] + '</br>';
      text += 'addvalue ' + finalCount + ' ' + x3[i] + ' ' + y3[i] + '</br>';
      text += 'bcolor ' + color + ' ' + color + ' ' + color + ' ' + finalCount + '</br>'
      text += 'blinewidth ' + width + ' ' + finalCount + '</br>';

      finalCount++
     //d to b
      text += 'addvalue ' + finalCount + ' ' + x3[i] + ' ' + y3[i] + '</br>';
      text += 'addvalue ' + finalCount + ' ' + x4[i] + ' ' + y4[i] + '</br>';
      text += 'bcolor ' + color + ' ' + color + ' ' + color + ' ' + finalCount + '</br>'
      text += 'blinewidth ' + width + ' ' + finalCount + '</br>';

      finalCount++
     //b to a
      text += 'addvalue ' + finalCount + ' ' + x4[i] + ' ' + y4[i] + '</br>';
      text += 'addvalue ' + finalCount + ' ' + x1[i] + ' ' + y1[i] + '</br>';
      text += 'bcolor ' + color + ' ' + color + ' ' + color + ' ' + finalCount + '</br>'
      text += 'blinewidth ' + width + ' ' + finalCount + '</br>';

   }
    var line = buffer + text;
    return line
  }





