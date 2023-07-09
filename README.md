# Adobe-Resume-Builder-Project
This project is a resume builder application which accepts data from the user from a webpage or a Curl request, processes it and returns a ```.pdf``` file using Adobe's Document Generation API.


This is my solution for Adobe's Papyrus Nebulae Hackathon's second round.

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

This file contains the main API endpoint, which can receive requests through different methods like HTTP Response via GET request and Curl requests. To execute the Curl command and interact with the API endpoint, please run the following command in your command prompt/terminal.

```shell
node apiindex.js
```

This would input a ```curl``` request in another terminal window, port set at ```localhost:3000/resume```, and would directly output a ```.pdf``` file inside the ```output``` directory.

Important: The server should be up and running for this to work. If you wish to use a different port, change it inside ```apiindex.js``` .

## Method 2: Resume Builder UI

Run the following command in your command prompt/terminal :

```shell
node apiindex.js
```

This would start a native server at ```localhost:3000/resume``` , go to the server and follow the on screen commands to generate your own resume!.

Both methods would create the pdf inside `output` folder.

## Testing

Testing of the API is done using ```apiindex.test.js``` using ```Jest``` testing framework. It tests the API against all three templates, different datasets and invalid template ID.


## Files Structure

```output``` would store all your generated resumes.

```sampleoutput``` stores some sample generated resumes.

```views``` contains .ejs files (html).

```templates``` contains .docx files of sample templates.

```static``` contains images for template selection during making of custom resume.

```index.js``` contains the driver code for API Call with UI.

```apiindex.js``` contains the driver code for API.

```apiindex.test.js``` runs tests on the API and stores them in ```output```

## PS
This is not a website, it is a Node JS application. Being a python developer, it was fun learning a new framework to solve a certain problem.

Thanks!


