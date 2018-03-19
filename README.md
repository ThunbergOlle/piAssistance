# piAssistance
---
PiAssistance is an open source project for pi robots and voice assistances. This can be used in many ways and the plan is to expand it so you can use
it in any enviroment you want. As always I priorities easy to use installations and setups for the bots. Please note: This bot under development and code could change. There for we don't recommend using this for your next "big project". Instead you can use this for testing of your robot. But please keep in mind that the code could be buggy & crash. 

---
## :memo: Developers
 - Olle Thunberg (olle.thunberg03@gmail.com or CloudianBusiness@gmail.com)
---
 ## VoiceAssistance
 The voice assistance is using the normal webkit that's default in the Chrome browser. (Yes, for the voice assistance please use chrome when connecting) The client's page recieves the information and translates it to english, then sends it to the server. If I get a bit more technical here: We use socket.io in order to connect. This is the part of the script that connects to the server: (note: the server must be running for the connection) 
```
socket.emit('input', {
   final: finalTranscripts
});
 ```
 
 ---
## :closed_book: The folders 
When you extract the .zip file you will see lots of folders and files. In this section I will be talking about what you will need to use and configure depending on what robot or what project you are making. If I's an assistance with face recognition & voice controlls or if it's an robot that simply use motors and move. Everything you will need to know about the folders will be here. Also feel free to ask me if you have any questions.

1. :file_folder: robotControl : 
In here you will find the the complete setup guide for controls to Robots, how to run them and what pins you should use. In this current version there is nothing really in there since I've not started with the development of the controls and robotics yet.
2. :file_folder: server : 
In here you will find the files to the voice assistance server and main computers. Here you can change and add anything you want. We would not recommend changing stuff if you  don't know what you are doing or changing. The files inside here are:
    - backup.json : This file was for testing and backup. Nothing that you have to care about.
    - commands.json : This file hosts all the voice input commands for the bot
    - server.js : This file is the core of the server. If you run this file you will run the voice command server. Please notice that you will have to configure some stuff before testing this. (If you're hosting the server on a remote machine.) How to configure the server.js can be found (here)
3. :file_folder: node modules : 
In here all the modules required will be installed. Please do not change or remove anything from this folder, simply just leave it!
4. :file_folder: pages : 
Inside the pages folder you will find the all the pages for controling the bot and sending voice commands ect. You can also make your own pages inside of here. 
    - index.html: This file is the voice-recognition page for interacting with the robot. You simply go on the page and allow the microphone to be used and start testing some commands. Here are some examples
    - connect.js: This file is used for connecting to the server and sending the voice inputs recieved from the user.
