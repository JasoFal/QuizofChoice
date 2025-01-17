# Quiz of Choice

#### A class project to practice No-Sql

#### By Jason Falk

## Technologies Used

* _Html_
* _Javascript_
* _React_
* _Git/Git Bash_
* _Firebase_

## Description

 Save and complete quizzes with the brand new quiz-of-choice app. You can even create your own quizzes.

# Setup/Installation Requirements
### Set up a firebase account
1. Start by navigating to https://firebase.google.com/ in the browser.
2. Then, click on Get Started. This will take you to a sign in page where you can log into a Google account (or create one if needed).
3. Access the Firebase console by going to `https://console.firebase.google.com/`.
4. Click on Create a Project. Enter a name then click continue (It will then bring you to a section about analytics you can turn it on but this project does not require it). Click continue. It should say Your new project is ready
5. Navigate to the project homepage
6. Locate and click on the build tab
7. Click Firestore Database
8. Click Create Database a popup will appear, Select Start in Test Mode, and then click Next. On the next page, leave the default form values and click Enable to proceed. 
9. First, head back to the Help Queue homepage by clicking the Project Overview button at the top-left of the page. Then, click on the </> icon from underneath the message "Get started by adding Firebase to your app".
10. When we click on the </> button, we'll be taken to a page that reads Add Firebase to your web app. You will need to enter an app nickname (The nickname you choose should be something that you can differentiate from other apps.) You could also click firebase hosting for this app but it's not needed.
12. You'll be given a script that you will include in our source code to configure and initialize firebase in our application. (You can still access that script in project settings)
----------
### Set Up Project
1. _In Git Bash type or copy/paste `git clone https://github.com/JasoFal/QuizofChoice.git`._
2. _Navigate to directory project was cloned to using git bash/file explorer/any other way._
* _Using git input the following commands into the terminal below_
3. _Install all packages with <mark>$ npm install<mark>_
4. _Build project using webpack with <mark>$ npm run build<mark>_
5. _Navigate to the top level directory and add a file called `.env`_
6. _First, head on over to your Quiz of Choice project settings in Firebase to get the Firebase configuration settings. From the project homepage, select the cog icon at the top-left of the screen, select Project settings, and scroll down until you find the Quiz-of-choice app. In this section, you'll find a code snippet that has a firebaseConfig variable that looks something like this:_

var firebaseConfig = {
  apiKey: "YOUR-UNIQUE-CREDENTIALS",
  authDomain: "YOUR-PROJECT-NAME.firebaseapp.com",
  projectId: "YOUR-UNIQUE-PROJECT-NAME",
  storageBucket: "YOUR-UNIQUE-URL",
  messagingSenderId: "YOUR-UNIQUE-CREDENTIALS",
  appId: "YOUR-UNIQUE-APPID"
};

7. Within the .env file you created add/copy&paste this code block replacing all generic strings with the info you got from the firebase config (Note: they all must be in string form so wrap all info in ""):

REACT_APP_FIREBASE_API_KEY = "YOUR-UNIQUE-CREDENTIALS"
REACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR-PROJECT-NAME.firebaseapp.com"
REACT_APP_FIREBASE_PROJECT_ID = "YOUR-PROJECT-FIREBASE-PROJECT-ID"
REACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR-PROJECT-NAME.appspot.com"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "YOUR-PROJECT-SENDER-ID"
REACT_APP_FIREBASE_APP_ID = "YOUR-PROJECT-APP-ID"

8. You should be good to go now continue below to spin up a server if you have trouble/can't get it to work go to the firebase docs [Here](https://firebase.google.com/docs/firestore/quickstart) to check out the firebase quickstart guide.
----------
* _To use app start dev server with <mark>$ npm run start<mark>_
----------
* ### _Below are optional commands_
* _Linting JS files in the <mark>src<mark> folder with <mark>$ npm run lint<mark>_
* _Run tests with Jest using <mark>$ npm run test<mark>_

## Known Bugs

* _No bugs currently found_

## License

MIT

Copyright (c) 1/15/2025 Jason Falk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.