/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
 import qr from 'qr-image';
 import fs from 'fs';

inquirer
  .prompt([
     {
      "message": "Type your url",
      "name": "url",
     }
  ])
  .then((answers) => {
    //console.log(answers.url);
     const url = answers.url;
     const qr_png = qr.image(url, { type: 'png' });
     qr_png.pipe(fs.createWriteStream('qr_img.png'));

     fs.writeFile('./URL.txt', url, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
  });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
