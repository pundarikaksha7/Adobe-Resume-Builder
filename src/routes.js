const express = require('express');
const router = express.Router();
const resumeUtils = require('./resumeUtils');
const docPaths = resumeUtils.docPaths;
const PDFServicesSdk = resumeUtils.PDFServicesSdk;

let path = '';

const templateOptions = [
  {
    id: '1',
    name: 'Template 1',
    docPath: docPaths + 'BasicTemplate.docx',
    image: 'images/RESUME-1.png'
  },
  {
    id: '2',
    name: 'Template 2',
    docPath: docPaths + 'ImageTemplate.docx',
    image: 'images/RESUME-2.png'
  },
  {
    id: '3',
    name: 'Template 3',
    docPath: docPaths + 'LinkTemplate.docx',
    image: 'images/RESUME-3.png'
  }
];




router.get('/success', (req, res) => {
  const isJsonRequest = req.headers['content-type'] === 'application/json';
  if (isJsonRequest) {
    res.send("PDF created successfully. Find it inside the output directory.");
  } else {
    res.render('end');
  }
});

router.get('/resume', (req, res) => {
  const isCurlRequest = req.headers['content-type'] === 'application/json';
  if (isCurlRequest) {
    const curlData = extractDataFromCurlCommand(req.body);
    res.json(curlData);
  } else {
    // Handle GET request
    res.render('api-resume-form', { templateOptions });
  }
});

router.post('/resume', async (req, res) => {
  try {
    // Initial setup, create credentials instance
    const credentials = PDFServicesSdk.Credentials.servicePrincipalCredentialsBuilder()
      .withClientId(process.env.PDF_SERVICES_CLIENT_ID)
      .withClientSecret(process.env.PDF_SERVICES_CLIENT_SECRET)
      .build();

    // Extract the form data from the request body
    const {
      template_id,
      personal_information = {
        name: '',
        last_name: '',
        email_address: '',
        phone_number: '',
        linkedin_url: ''
      },
      job_title,
      career_objective,
      skills,
      education,
      experience,
      achievements
    } = req.body;


    // Access the data
    console.log('Template ID:', template_id);
    console.log('Personal Information:', personal_information);
    console.log('Job Title:', job_title);
    console.log('Career Objective:', career_objective);
    console.log('Skills:', skills);
    console.log('Education:', education);
    console.log('Experience:', experience);
    console.log('Achievements:', achievements);

    
    switch (template_id) {
      case '1':
        path = templateOptions[0].docPath; // BasicTemplate
        break;
      case '2':
        path = templateOptions[1].docPath; // ImageTemplate
        break;
      case '3':
        path = templateOptions[2].docPath; // LinkTemplate
        break;
      default:
        // Handle the case when template_id is not found
        res.status(400).json({ error: 'Invalid template_id' });
        return;
    }

    const educationItems = (education || []).map(item => ({
      SchoolName: item.school_name || '',
      Year: item.passing_year || '',
      Description: item.description || ''
    }));

    // Process Experience
    const experienceItems = (experience || []).map(item => ({
      CompanyName: item.company_name || '',
      Year: item.passing_year || '',
      Description: item.responsibilities || ''
    }));

    // Process Achievements
    const achievementItems = (achievements || []).map(item => ({
      Type: item.field || '',
      Description: item.awards || ''
    }));

    // Create an ExecutionContext using credentials
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);

    // Create a new DocumentMerge options instance
    const documentMerge = PDFServicesSdk.DocumentMerge;
    const documentMergeOptions = documentMerge.options;
    const options = new documentMergeOptions.DocumentMergeOptions({
      Name: personal_information.name,
      LastName: personal_information.last_name,
      EmailAddress: personal_information.email_address,
      PhoneNumber: personal_information.phone_number,
      LinkedIn: personal_information.linkedin_url,
      JobTitle: job_title,
      Summary: career_objective,
      Skills: skills,
      Education: educationItems,
      Experience: experienceItems,
      Achievements: achievementItems
    }, documentMergeOptions.OutputFormat.PDF);

    // Create a new operation instance using the options instance
    const documentMergeOperation = documentMerge.Operation.createNew(options);

    // Set operation input document template from a source file
    const input = PDFServicesSdk.FileRef.createFromLocalFile(path);
    documentMergeOperation.setInput(input);

    // Generate a file name
    const outputFilePath = resumeUtils.createOutputFilePath();

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

module.exports = router;

