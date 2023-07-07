# AdobeRound-2
This project is a resume builder application which accepts data from the user from a webpage, processes it and returns a .pdf file using Adobe's Document Merge API.


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
    "nodemon": "^2.0.22"
  }
```

After cloning the repository, install all the dependencies by running:

```shell
npm install.
```

## Mentioning Path Variables and Environment Variables

Inside index.js there are two path names:

docPaths refers to the directory which stores .docx files of resume templates.

resultPaths would store the newly created resume pdfs.

Replace these path names with path names from your personal machine.

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

## Running the project

Run the following command in your command prompt/terminal:

```shell
nodemon index.js
```

This would start a native server at localhost:3000/ , go to the server and follow the on screen commands to generate your own resume!.






## Files Structure

Output contains resume samples.

Views contains .ejs files (html).

templates contains .docx files of sample templates.

static contains images for demonstration.

index.js contains the driver code.

## PS
This is not a website, it is a Node JS application. Evaluators, kindly note that I am not a Node developer, I learnt the entire framework in a short span, therefore kindly ignore any minor shortcomings. Thanks!


