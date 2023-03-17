# Text Editor - Progressive Web Application [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## DESCRIPTION 
This is a text editor which saves your inputs even when you're offline! As this is a progressive web appilicasion, you can download it to your local computer and use it as a native application. It uses the following technologies:
* Progressive Web Application
* Service Worker
* Indexed DB

## TABLE OF CONTENTS
[INSTALLATION](#installation)<br>
[USAGE](#usage)<br>
[LICENSE](#license)<br>
[CONTRIBUTION](#contribution)<br>
[TESTS](#tests)<br>
[SCREENSHOTS](#screenshots)<br>
[DEMO](#demo)<br>
[QUESTIONS](#questions)

## INSTALLATION 

### HEROKU
If you access the application on [Heroku](https://text-editor-pwa-2023.herokuapp.com/), you can use the application on Heroku. If you would like to install it into your computer, click the install button at the top of the page.

### LOCAL
This application requires 1.JavaScript, 2.Node.JS (version 16, not the latest), 3.Node package manager. In a blank folder, put necessary files (refer to the TESTS section for the details) and open the command line. In the command line, move to this folder and then type "npm install". Make sure that a folder called "node_modules" and a file called package-lock.json are created in all the root, server and client folders. Then type "npm start" and open the index.html.

## USAGE 

### Command Line - Preparation
In Command Line, type "npm start" and then you'll see a message "App listening on PORT 3001!". Go to Insomnia and request the following actions:

#### Insomnia - Path
* Users: http://localhost:3001/api/users/
* Friends: http://localhost:3001/api/users/:userId/friends/
* Thoughts: http://localhost:3001/api/thoughts/
* Reactions: http://localhost:3001/api/thoughts/:thoughtId/reactions/

#### Method
* GET: to view data (you can add an ID at the end of the path like "/tags/2uyhsyiung6rt52x" if you would like to view specific data)
* POST: to add new data 
* PUT: to update existing data (you need to add an ID at the end of the path to specify the item)
* DELETE: to delete data (you need to add an ID at the end of the path to specify the item)

#### Inputs for POST and PUT
* User: {"username": "string", "email": "email"}
* Friend: Nothing in the request body but add the friend's userId at the end of the path
* Thought: {"thoughtText": "string", "username": "string", "userId": "string (ID)"}
* Reaction: {"reactionBody": "string", "username": "string"}

## LICENSE 
MIT:<br>
Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the “Software”), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
permit persons to whom the Software is furnished to do so.

## CONTRIBUTION 
Feel free to develop this application by forking the GitHub repository and sending me pull requests. You can also contact me.

## TESTS 
Copy the following files and folder to your computer and test this application:
```md
.
├── config/
|   └── connection.js
├── controllers/
|   ├── thoughtController.js
|   └── userController.js
├── models/
|   ├── index.js
|   ├── Reaction.js
|   ├── Thought.js
|   └── User.js
├── routes/
|   ├── api/
|   |   ├── index.js
|   |   ├── thoughtRoutes.js
|   |   └── userRoutes.js
|   └── index.js      
├── index.js  
└── package.json 
``` 

## SCREENSHOTS
![image](https://user-images.githubusercontent.com/121307266/225153970-23b64d2c-dc81-4247-8fac-cdd6f5012821.png)
![image](https://user-images.githubusercontent.com/121307266/225153976-ba6afa1d-40d7-48b8-96d4-caed8f88d16a.png)
![image](https://user-images.githubusercontent.com/121307266/225153979-6d60377c-30b2-478b-af19-4da92bb017c6.png)
![image](https://user-images.githubusercontent.com/121307266/225153980-c27a7f29-e942-4fa8-bb01-5140a863eeef.png)

## DEMO
[Demo video](https://watch.screencastify.com/v/S8VZw0ttoa1f948UhniH)

## QUESTIONS 
If you have any questions, feel free to reach out to me!<br>
GitHub page: [https://github.com/shohei-mochizuki](https://github.com/shohei-mochizuki)<br>
Email: [shohei.mochizuki.jp@gmail.com](mailto:shohei.mochizuki.jp@gmail.com)
