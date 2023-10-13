var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start()
}
recognition.onresult = function(event){
    console.log(event)
    conteudo = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML= conteudo
    speak()
}

function speak(){
    var synth = window.speechSynthesis;
    speakData = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis)
    Webcam.attach(camera);
}

camera = document.getElementById("camera")
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});