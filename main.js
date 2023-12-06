var speechrecognition = window.webkitSpeechRecognition;
var recognition= new speechrecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start()
}

recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    speak()
}

function speak(){
    var synth=window.speechSynthesis;
    var speak_data=document.getElementById("textbox").value;
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
}

Webcam.set({
    width:360 ,
    height:250 ,
    image_format:'png' ,
    png_quality:90 
})

camera=document.getElementById("camera");
Webcam.attach(camera);

setTimeout(function()
{
    img_id="selfie1";
    take_snapshot();
    spak_data="taking your next selfie in 10 seconds";
    var utterThis=new SpeechRecognitionUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);

function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result").innerHTML='<img id="selfie1" src=" '+data_uri+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result").innerHTML='<img id="selfie2" src=" '+data_uri+'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result").innerHTML='<img id="selfie3" src=" '+data_uri+'"/>';
        }
    })
}



