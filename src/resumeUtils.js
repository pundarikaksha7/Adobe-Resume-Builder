const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');
const path=require('path');

//path variables
let docPaths = path.join(__dirname, '..', 'templates/');
let resultPaths = path.join(__dirname, '..', 'output/');




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

module.exports = {
  docPaths,
  resultPaths,
  createOutputFilePath,
  PDFServicesSdk
  
};
