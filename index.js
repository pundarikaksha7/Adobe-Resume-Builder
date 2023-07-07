//path variables
let docPaths="templates/";
let resultPaths="output/";


const express = require('express');
const bodyParser = require('body-parser');
const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');
const fs = require('fs');

const app = express();
app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static')); 




var path='';

const templateOptions = [
    {
      name: 'Template 1',
      docPath: docPaths+'BasicTemplate.docx',
      image:"RESUME-1.png"
    },
    {
      name: 'Template 2',
      docPath: docPaths+'ImageTemplate.docx',
      image: 'RESUME-2.png'
    },
    {
      name: 'Template 3',
      docPath: docPaths+'LinkTemplate.docx',
      image: 'RESUME-3.png'
    }
  ];

app.get('/resume', (req, res) => {
  console.log(path);
  res.render('resume-form');
});

app.get('/',(req,res)=>{
    res.render("template-options-form",{options:templateOptions});
   
});

app.get('/success',(req,res)=>{
    res.render("end");
})

app.post('/select-template', async (req, res) => {
  const selectedTemplateName = req.body.template;

  

  if (selectedTemplateName) {
    
    path = selectedTemplateName; // Assign the selected template's docPath to the path variable
    res.redirect('/resume');
  } else {

    res.status(404).send('Selected template not found.');
  }
});




// Resume Builder API route
app.post('/resume', async (req, res) => {
    try {
      // Initial setup, create credentials instance
      const credentials = PDFServicesSdk.Credentials.servicePrincipalCredentialsBuilder()
        .withClientId(process.env.PDF_SERVICES_CLIENT_ID)
        .withClientSecret(process.env.PDF_SERVICES_CLIENT_SECRET)
        .build();
  
      // Extract the form data from the request body
      const {
        Name,
        LastName,
        EmailAddress,
        PhoneNumber,
        LinkedIn,
        JobTitle,
        Summary,
        Skills,
        Education,
        Experience,
        Achievements,
      } = req.body;

      
  
      // Convert the JSON string of achievements to an array
      const achievements = JSON.parse(Achievements);
      const education=JSON.parse(Education);
      const experience=JSON.parse(Experience);

      console.log(achievements);
      console.log("hey");
  
      // Create an ExecutionContext using credentials
      const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);
  
      // Create a new DocumentMerge options instance
      const documentMerge = PDFServicesSdk.DocumentMerge;
      const documentMergeOptions = documentMerge.options;
      const options = new documentMergeOptions.DocumentMergeOptions({
        Name: Name,
        LastName: LastName,
        EmailAddress: EmailAddress,
        PhoneNumber: PhoneNumber,
        LinkedIn:"https://www.linkedin.com"+ LinkedIn,
        JobTitle: JobTitle,
        Summary: Summary,
        Skills: Skills.split(' ').map(skill => skill.trim()),
        Education: education,
        Experience: experience,
        Achievements: achievements
      }, documentMergeOptions.OutputFormat.PDF);
  
      // Create a new operation instance using the options instance
      const documentMergeOperation = documentMerge.Operation.createNew(options);
  
      // Set operation input document template from a source file
      const input = PDFServicesSdk.FileRef.createFromLocalFile(path);
      documentMergeOperation.setInput(input);
  
      // Generate a file name
      const outputFilePath = createOutputFilePath();
  
      // Execute the operation and save the result to the specified location
      const result = await documentMergeOperation.execute(executionContext);
      await result.saveAsFile(outputFilePath);
  
      // Return the generated resume file path as the response
      res.redirect('/success');
    } catch (err) {
      console.log('Exception encountered while executing operation', err);
      res.status(500).json({ error: 'An error occurred while generating the resume.' });
    }
  });



// Start the server

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
function createOutputFilePath() {
  const date = new Date();
  const dateString =
    date.getFullYear() +
    '-' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + date.getDate()).slice(-2) +
    'T' +
    ('0' + date.getHours()).slice(-2) +
    '-' +
    ('0' + date.getMinutes()).slice(-2) +
    '-' +
    ('0' + date.getSeconds()).slice(-2);
  return  resultPaths+ dateString + '.pdf';
}



