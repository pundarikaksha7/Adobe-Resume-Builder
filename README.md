# Adobe-Resume-Builder-Project
This project is a resume builder application which accepts data from the user from a webpage or a Curl request, processes it and returns a ```.pdf``` file using Adobe's Document Generation API.

This is my solution for Adobe's Papyrus Nebulae Hackathon's second round, built on Node JS framework. 



## Demonstration

The demonstration of the project can be accessed at the following URL: https://adobe-resume-builder.vercel.app/resume

This website is deployed on Vercel, utilizing the API developed from this repository to generate dynamic resumes.

Source code of the deployed website resides in the ```deploy``` branch of the same repository.

Please note that the provided link is solely for demonstration purposes and is not used for commercial deployment. PDF generation process is being validated by my own API credentials.




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

The API testing is performed using the app.test.js file located in the src directory. The testing framework employed is Jest. This test file encompasses a comprehensive suite of tests that evaluate the API's functionality against all three templates. It verifies the behavior of the API with various datasets, including edge cases such as invalid template IDs,internal server errors, bad requests and incorrect client credentials. Through this testing process, the API's robustness and reliability are thoroughly assessed to ensure accurate and secure resume generation.

To run tests on the algorithm, run the following command.

```shell
npm test
```



Important: Make sure that your client id and secret keys have been set in the local or global environments before running the tests.



## Files Structure

```output``` would store all your generated resumes.

```sampleoutput``` stores some sample generated resumes.

```views``` contains .ejs files (html).

```templates``` contains .docx files of sample templates.

```static``` contains images, ```.css``` files and ```.js``` files for UI component of the project.

```src``` contains modularized code files



## Source Code Structure and Algorithm Description

### src/app.js

The ```app.js``` file serves as the primary endpoint of the API. It acts as the driver code responsible for initializing and configuring the API server. It handles incoming requests, processes them, and returns the appropriate response

### src/routes.js

The ```routes.js``` file plays a crucial role in defining and managing the routes for the API. It establishes the endpoints that the API exposes and specifies the corresponding handling logic. Additionally, this file incorporates the primary algorithms necessary for processing the API requests and generating the desired results.

### src/resumeUtils.js

The ```resumeUtils.js``` file provides a collection of utility functions that are used by the API. These utilities assist in various tasks, such as providing file paths and generating formatted outputs.


### Algorithm Description

The API expects data to be submitted in the form of a ```JSON``` object. The algorithm responsible for processing the data, together with the specified file path pointing to the assigned resume template in the ```.docx``` format, initiates parsing. Subsequently, both the data and file path are transmitted to an instance of the Adobe Document Generation API. As part of the process, the API verifies the client's credentials to ensure authorized access. Upon successful authentication, Adobe's API generates a merged PDF document representing the newly created resume by combining the provided data with the template.
    

## PS
Being a python developer, it was fun learning a new framework to solve a certain problem.

Thanks!


