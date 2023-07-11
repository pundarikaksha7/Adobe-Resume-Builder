# Adobe-Resume-Builder-Project
This project is a resume builder application which accepts data from the user from a webpage or a Curl request, processes it and returns a ```.pdf``` file using Adobe's Document Generation API.


This is my solution for Adobe's Papyrus Nebulae Hackathon's second round, built on Node JS framework.

# Documentation

Clone the repository to your local machine by running the following command inside your terminal/ command prompt.

```shell
git clone "https://github.com/pundarikaksha7/AdobeRound-2.git"
```


## Dependencies

For this project to run, node modules must be present inside your project directory.
```javascript
"author": "Pundarikaksha",
  "license": "ISC",
  "dependencies": {
    "@adobe/pdfservices-node-sdk": "^3.4.0",
    "axios": "^1.4.0",
    "body-parser": "^1.20.2",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "nodemon": "^2.0.22",
    "supertest": "^6.3.3"
  },
  "devDependencies": {
    "jest": "^29.6.1"
  }
```

After cloning the repository, install all the dependencies by running:

```shell
npm install
```

## Setting Environment Variables

Set the environment variables using the following commands in your command prompt/terminal.

Windows:

```shell
set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>
set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>
```

MacOS/Linux:

```shell
export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>
export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>
```

# Running the project

## Method 1: Resume Builder API

```app.js``` implements the primary API endpoint, which can handle requests using various methods such as HTTP GET requests and Curl requests. To interact with the API endpoint via Curl or other methods, please execute the following commands in your command prompt or terminal.

Run the following command inside your command prompt / terminal.

```shell
npm start
```

This would input a ```curl``` request in another terminal window, port set at ```localhost:8080/resume```, and would directly output a ```.pdf``` file inside the ```output``` directory.

Important: The server should be up and running for this to work. If you wish to use a different port, change it inside ```app.js``` .

## Method 2: Resume Builder UI

Run the following command inside your command prompt / terminal.

```shell
npm start
```

This would start a native server at ```localhost:8080/resume``` , go to the server and follow the on screen commands to generate your own resume!

On clicking submit, wait for 15 seconds as your API keys are being verified by Adobe's servers and the PDF is being generated.

Important: The server should be up and running for this to work. If you wish to use a different port, change it inside ```app.js``` .

Both methods would create the pdf inside `output` folder.

## Testing

Testing of the API is done by ```app.test.js``` inside  ```src``` directory, using ```Jest``` testing framework. It tests the API against all three templates, different datasets, invalid template IDs and invalid client credentials. 

To test the algorithms, run the following command while being in ```src``` directory.

```shell
npm test
```

Important: Make sure that your client id and secret keys have been mentioned in the console before running the tests.


## Files Structure

```output``` would store all your generated resumes.

```sampleoutput``` stores some sample generated resumes.

```views``` contains .ejs files (html).

```templates``` contains .docx files of sample templates.

```static``` contains images, ```.css``` files and ```.js``` files for UI component of the project.

```src``` contains modularized code files

## PS
This is not a website, it is a Node JS application. Being a python developer, it was fun learning a new framework to solve a certain problem.

Thanks!


