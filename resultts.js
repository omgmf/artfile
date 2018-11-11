var y =320;
var a=218;
var b= 217; 
var c= 127;
var d = 163;
var e = 232;
var f= 113;
var g = 105;
var h = 157;
var i = 43;
var s = 0- 160;
function setup(){
createCanvas(600, 600);
frameRate(15);
}

function draw(){  
fill(a,b, c);
stroke(a,b, c);
rect(0,0,600,20);

fill(d,e,f);
stroke(d,e,f);
rect(0,20,600,150);

fill(g,h,i);
stroke(g,h,i);
rect(0,170,600,300);

fill(250,241,0);
stroke(250,241,0);
ellipse( 300, y, 148,159 );

fill(121,137,174);
stroke(121,137,174);
ellipse(300, s, 148,159 );

fill(185,202,228);
stroke(185,202,228);
ellipse(332, s+20, 52,28 );
ellipse(256, s, -34,-30 );
ellipse(314, s+-40, 28,24 );
ellipse(289, s, -36,-30 );
ellipse(296, s+58, 19,19 );


fill(g,h,i);
stroke(g,h,i);
rect(0,320,600,150);

fill(a,b, c);
stroke(a,b, c);
rect(0,470,600,130);

if(mouseIsPressed){
y = y + 1;
}
if(y>320 && y<400){
a= a-(y- 320)/20;
b= b-(y- 320)/20;
c= c-(y- 320)/20;

d=d-(y- 320)/20;
e=e-(y- 320)/20;
f=f-(y- 320)/20;

g=g-(y- 320)/20;
h=h-(y- 320)/20;
i=i-(y- 320)/20;
}
if(y>400 && mouseIsPressed){
s=s+1;
}

if(s>0 && mouseIsPressed){
a= a+(s)/50;
b= b+(s)/50;
c= c+(s)/50;

d=d+(s/50);
e=e+(s)/50;
f=f+(s)/50;

g=g+(s)/50;
h=h+(s)/50;
i=i+(s)/50;
}
}
