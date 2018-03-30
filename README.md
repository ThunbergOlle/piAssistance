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
    - jsonServer.js : This file is the JSON powered server. We recommend this one for testing the bot with small databases like in a json file. For bigger databases and inputs & outputs please use dbServer.js
    - dbServer.js : This file is the MongoDB powered database server. All the commands are handled inside the database. This means there will be a much faster response from the server to the client if it's running on localhost (With fast enough internet, you can connect to someone elses databases) Please note that this file requires MongoDB to be installed on the machine and running.
3. :file_folder: node modules : 
In here all the modules required will be installed. Please do not change or remove anything from this folder, simply just leave it!
4. :file_folder: pages : 
Inside the pages folder you will find the all the pages for controling the bot and sending voice commands ect. You can also make your own pages inside of here. 
    - index.html: This file is the voice-recognition page for interacting with the robot. You simply go on the page and allow the microphone to be used and start testing some commands. Here are some examples
    - connect.js: This file is used for connecting to the server and sending the voice inputs recieved from the user.

---
## Setup & Config
Let's begin with the easy part of the setup. Well, basicly install it and set it up inside a folder. If you're familiar with github this shouldn't be any problems.
[Installation guide for Linux]
[Installation guide for Windows]
For the moment. MAC is not supported :(

The first thing that you will have to configure is the clientConfig.json. Inside the json file you will have to configure some settings like for example your email adress & password but also you're location. This information is required for some functions to work. If you don't want to fill in the information then the functions will not work. 

If you want to just test the bot (Please note that it may be slow) run the jsonServer by locating the folder inside a commandprompt and typing "node jsonServer.js"(sudo node jsonServer.js if on Linux). 
NodeJS must be installed.

After you've run the serverBot please go inside the "pages" folder and open Index.HTML. Right now it should be working. If you've got a problem please read the common-problems section of the page.

### MongoDB Setup
If you want a faster response from the server, MongoDB is required. You can read more about MongoDB and what it does [here]: https://www.mongodb.com/
Basicly MongoDB is a database engine. In order to set it up correctly please follow [these]: https://youtu.be/pWbMrx5rVBE?t=2m28s instructions.

Then test the serverBot by opening a commandprompt and typing "node dbServer.js"
(sudo node dbServer.js if on Linux). 
Now it should be running.


You should by now be pretty much done with setting up the database. You can now start up the bot and say "install database", and some basic commands should be added to the database
 
