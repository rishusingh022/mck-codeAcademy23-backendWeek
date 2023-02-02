const fs = require('fs');
function readFilePromise(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(`../textFiles/${filename}`, 'utf-8', (error, content) => {
      if (error) {
        throw error;
      }
      else if (filename === 'sampleFile.txt') {
        reject('Error Message');
      }
      else {
        resolve(content);
      }
    });
  });
}
readFilePromise('1.txt')
  .then(content => {
    console.log(content);
    return readFilePromise('2.txt');
  })
  .then(content => {
    if(isNaN(content)){
      throw new Error('that wont exceute because undifined is not a string');
    }
    console.log(content);
    return readFilePromise('3.txt');
  })
    
  .then(content => {
    console.log(content);
    return readFilePromise('4.txt');
  })
    
  .then(content => {
    console.log(content);
    return readFilePromise('5.txt');
  })
  .then(content => {
    console.log(content);
  })
  .catch(error => {
    console.log(error);
  });