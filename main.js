status = "";
objects = [];
function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function start(){
    detection = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("num1").innerHTML = "Status:Currently Detecting Objects";
    inputvalue = document.getElementById("textinput").value;
}
function draw(){
    image(video, 0, 0, 600, 400);
    if(status != ""){
        for(i = 0; i < objects.length; i++){
        fill("#0000FF");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " "+ percent + "%", objects[i].x + 15, objects[i].y + 15 );
        noFill();
        stroke("#0000FF");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    if(inputvalue == objects[i].label){
        video.stop();
        objectDetector.detect(gotResult);
        document.getElementById("num1").innerHTML = "Object Mentioned Found";
        speech = window.speechSynthesis;
        SpeechSynthesisUtterance("Object Mentioned Found");
        speech.speak.utterThis();
    } else {
        document.getElementById("num2").innerHTML = "Object Mentioned Not Found";
    }
}
function modelLoaded(){
    console.log("model loaded");
    status = true;
}
function gotResult(){
    objects = inputvalue;
    
}