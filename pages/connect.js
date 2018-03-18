//Setting up variables for client.
var socket = io.connect('http://127.0.0.1:8000');
var recognition = new webkitSpeechRecognition();  

//If we get an answer from server.
socket.on('answer', function(data){
    var answer = data.answer;
    responsiveVoice.speak(answer);
    
});

//Listening for voices or sounds
function listen() {
    recognition.continuous = true;
    console.log('Listening...');
    recognition.interimResults = true;

    //If we get a result from the user.
    recognition.onresult = function(voice){
        //Sets up some variables
        var interimTranscripts = '';
        var finalTranscripts = '';

        //Looping through information.
        for(var i = event.resultIndex; i < event.results.length; i++){
            var transcript = event.results[i][0].transcript;
            //If this is the complete sentence or word.
            if(event.results[i].isFinal){
                finalTranscripts += transcript;

            } else {
                interimTranscripts += transcript;
                
                
            }
        }
        if(finalTranscripts != ''){
        console.log(finalTranscripts);
        
        //Sends the input to the server to check the database.
        socket.emit('input', {
            final: finalTranscripts
        });
        }
    }
    //If its ending.
    recognition.onend = function(){
       
    }
        //Starting check for voices or sounds.
        recognition.start();

}