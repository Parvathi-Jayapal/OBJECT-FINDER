img = "";
objects=[];
status="";
var r="";
var g="";
var b="";
var obj="";
var f="";

function start(){
    document.getElementById("status").innerHTML="Getting on it right away...";
    cocossd= ml5.objectDetector('cocossd',modelLoaded );
    obj= document.getElementById("inputObject").value;
    console.log(obj);
}
function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
   video= createCapture(VIDEO);
   video.size(380,380);
   video.hide();

}

function preload() {
    

}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    cocossd.detect(video, gotResult);
}

function draw()
{
    image(video, 0, 0, 380,380);
  r= random (255);
  g=random (255);
  b=random (255);
}