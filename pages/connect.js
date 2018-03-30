//Setting up variables for client.
var socket = io.connect('http://127.0.0.1:8000');
var recognition = new webkitSpeechRecognition();


//TRUE OR FALSE VARIABLES
var email = false;
var target = false;
var newCommand = false;
var newCommandAnswer = false;

//STRING VARIABLES
var emailname = ''
var message = '';
var addQst = '';

//If we get an answer from server.
socket.on('answer', function(data){
    var answer = data.answer;
    responsiveVoice.speak(answer);
    email = false;
});

socket.on('email', function(data){
    responsiveVoice.speak("Tell the GMAIL you want to send your message to. Please only say name lastname for example and I will add the @gmail.com for you.");
    email = true;
    message = true;
});

socket.on('message', function(data){
  var message = data.message;
  targetMessage = message;
  responsiveVoice.speak("Say the message that's going to be sent!");
});

socket.on('emailSuccess', function(data){
  responsiveVoice.speak('Email sent to: ' + data.targetEmail);
});
socket.on('newCMDReq', function(data){
    newCommand = true; //Sets newCommand to true value.
    responsiveVoice.speak('Please tell me the question you want to add to the database');
});
socket.on('newCMDAnswer', function(data){
    addQst = data.newCommandQst;
    newCommandAnswer = true;
    responsiveVoice.speak('Tell me the answer you want to add to the database.');
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
                if(email == true){
                    socket.emit('emailInput', {
                        email: finalTranscripts
                    });
                    emailname = finalTranscripts
                    email = false
                    return {email, emailname}
                }

                else if(message == true){
                  console.log(emailname);
                  socket.emit('message', {
                    emailName : emailname,
                    message: finalTranscripts
                  });
                  return message = false
                } 

                else if(newCommand == true){
                    socket.emit('newCMDRes', {
                        res: finalTranscripts
                    });
                    return newCommand = false; //Sets the value to false once again.
                }
                else if (newCommandAnswer == true){
                    socket.emit('finalCMDAnswer', {
                        qst: addQst,
                        ans: finalTranscripts
                    });
                    return newCommandAnswer = false;
                }

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
