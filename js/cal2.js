window.onload = init;
var s='';
var a=0;
var b=0;
var c
var d=0;
function init(){
  var bc=document.getElementById("clear");
  bc.onclick=fc;
  var b1=document.getElementById("one");
  b1.onclick=f1;
  var b2=document.getElementById("two");
  b2.onclick=f2;
  var b3=document.getElementById("three");
  b3.onclick=f3;
  var b4=document.getElementById("four");
  b4.onclick=f4;
  var b5=document.getElementById("five");
  b5.onclick=f5;
  var b6=document.getElementById("six");
  b6.onclick=f6;
  var b7=document.getElementById("seven");
  b7.onclick=f7;
  var b8=document.getElementById("eight");
  b8.onclick=f8;
  var b9=document.getElementById("nine");
  b9.onclick=f9;
  var bz=document.getElementById("zero");
  bz.onclick=f0;
  var ba=document.getElementById("plus");
  ba.onclick=fp;
  var bmi=document.getElementById("minus");
  bmi.onclick=fmn;
  var bmu=document.getElementById("mul");
  bmu.onclick=fm;
  var bd=document.getElementById("div");
  bd.onclick=fd;
  var bde=document.getElementById("dec");
  bde.onclick=fde;
  var bas=document.getElementById("as");
  bas.onclick=fas;
  var mc=document.getElementById("non");
  mc.onclick=avhi;

}
function fc(){
  var t=document.getElementById("ans");
  t.textContent="Ans";
  a=0;
  b=0;
  s=" ";
  d=0;
  c=0;
}
function f1(){
  s+=1;

  program1();

}
function f2(){
  s+=2;
  program1();
}
function f3(){
  s+=3;
  program1();
}
function f4(){
  s+=4;
  program1();
}
function f5(){
  s+=5;
  program1();
}
function f6(){
  s+=6;
  program1();
}
function f7(){
  s+=7;
  program1();
}
function f8(){
  s+=8;
  program1();
}
function f9(){
  s+=9;
  program1();
}
function f0(){
  s+=0;
  program1();
}
function fp(){
  b=s;
  a=a+Number(b);
  s+="+";
  c="+";
  program1();
  s=" ";
}
function fmn(){
  b=s;
  a=Number(b);
  s+="-";
  c="-";
  program1();
  s=" ";
}
function fm(){
  b=s;
  a=Number(b);
  s+="X";
  c="x";
  program1();
  s=" ";
}
function fd(){
  b=s;
  a=a/Number(b);
  s+="+";
  c="d";
  program1();
  s=" ";
}
function fde(){
  d+=1;
  if(d==1){
    s+=".";
    program1();
  }
}
function program(){
  var t=document.getElementById("ans");
  t.textContent=a;
  a=0;
  b=0;
  s=" ";
  d=0;
  c=0;
}
function program1(){

  var t=document.getElementById("ans");
  t.textContent=s;
}
function avhi(){
  document.write("abhi kaam nahi karta!");
}
function fas(){
  if (c=="+"){a=a+Number(s);}
  else if(c=="-"){
    a=a-Number(s);
  }
  else if(c=="x"){
    a=a*Number(s);
  }
  else if(c=="d"){
    a=a/Number(s);
  }
  program();
}
