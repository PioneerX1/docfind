## DocFind

A web app for users to type in a symptom and find doctors nearby.

#### By _**Mick Sexton**_

### Description

Users can type in symptoms or specialties or other keywords in the search box and receive a list of doctors in their area, to help them find treatment. This app utilizes a 3rd party API from BetterDoctor.com.

### Setup

To create the necessary databases, launch postgres, then psql, and run the following commands:

* _Obtain your own API key from BetterDoctor.com_
* _Open the DocFind folder, create a .env file with your key_
* _For reference, the .env file was left off per the gitignore_
* _The API key used for this project was 1bf8e95ed44fd44663222039019825c6_
* _Download all necessary npm and bower dependencies_
* _Run gulp build and then gulp serve to launch in a browser_


## Code Specs

|Behavior - Plain English|Input|Output|
|---|---|---|
|User sees a search page with a text field and a search button.|User inputs a symptom like 'soar throat' or 'headache' in the field.|User sees a list of matching doctors returned.|
|User sees list of matching doctors.|User clicks on one of the thumbnails - specifically the doctor's name.|User is directed to a separate tab on Healthgrades.com that returns a search of that doctor's name for more information.|

## Known Bugs

_This program currently uses hard-coded coordinates for Seattle. The BetterDoctor API claims to support city/state-based searches as well, but was not able to return successful results even on their practice page._

## Support and contact details

_Please contact Mick Sexton at lacrookedbeat@hotmail.com for any questions, feedback, or concerns._

## Technologies Used

_Technologies used include Gulp, Bower, Node.js, NPM, Javascript, JQuery, Bootstrap, SCSS, SASS, HTML, and Git_

### License

*This software operates under the MIT license.*

Copyright (c) 2017 **_Mick Sexton_**
