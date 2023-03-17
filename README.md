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
This application requires 1.JavaScript, 2.Node.JS (version 16, not the latest), 3.Node package manager. In a blank folder, put necessary files (refer to the TESTS section for the details) and open the command line. In the command line, move to this folder and then type "npm install". Make sure that a folder called "node_modules" and a file called package-lock.json are created in all the root, server and client folders. Then type "npm start" and open the index.html. Once you open the page, you can install it into your computer by clicking the install button at the top of the page if you would like.

## USAGE 
Type whatever you like in the editor. Once you stop typing and when the focus is off, the data is saved and you will see it when you come back to the page after closing and reopening it or refreshing it. Make sure that you put the cursor outside of the text editor area and click outside of the text area as well.  

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
If you access the application on [Heroku](https://text-editor-pwa-2023.herokuapp.com/), you can test the application on Heroku. If you would like to test it on your local computer, copy the following files and folder to your computer:
```md
.
├── client/
|   ├── favicon.ico
|   ├── index.html
|   ├── package.json
|   ├── src/
|   |   ├── css/
|   |   |   └── style.css
|   |   ├── images/
|   |   |   └── logo.png
|   |   └── js/
|   |       ├── database.js
|   |       ├── editor.js
|   |       ├── header.js
|   |       ├── index.js
|   |       └── install.js
|   ├── src-sw.js
|   └── webpack.config.js
├── package.json
└── server/
    ├── package.json
    ├── routes/
    |   └── htmlRoutes.js
    └── server.js
``` 

## SCREENSHOTS
![image](https://user-images.githubusercontent.com/121307266/225153970-23b64d2c-dc81-4247-8fac-cdd6f5012821.png)
![image](https://user-images.githubusercontent.com/121307266/225153976-ba6afa1d-40d7-48b8-96d4-caed8f88d16a.png)
![image](https://user-images.githubusercontent.com/121307266/225153979-6d60377c-30b2-478b-af19-4da92bb017c6.png)
![image](https://user-images.githubusercontent.com/121307266/225153980-c27a7f29-e942-4fa8-bb01-5140a863eeef.png)

## QUESTIONS 
If you have any questions, feel free to reach out to me!<br>
GitHub page: [https://github.com/shohei-mochizuki](https://github.com/shohei-mochizuki)<br>
Email: [shohei.mochizuki.jp@gmail.com](mailto:shohei.mochizuki.jp@gmail.com)
