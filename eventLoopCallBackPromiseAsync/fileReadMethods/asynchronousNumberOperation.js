const fs = require('fs');

function readFileCustom(filename){
  return new Promise((resolve,reject) => {
    fs.readFile(`../textFiles/${filename}`,'utf-8',(error,content) => {
      if(error){
        reject(error);
      }
      else if(!fs.existsSync(`../textFiles/${filename}`)){
        reject('file does not exits');
      }
      else if(isNaN(parseInt(content))){
        reject('Not a number');
      }
      else{
        resolve(content);
      }
    });
  });
}
async function caller() {
  try{
    let response = await Promise.all([readFileCustom('1.txt'),readFileCustom('2.txt'),readFileCustom('3.txt'),readFileCustom('4.txt'),readFileCustom('5.txt')]);
    let result = response.reduce((acc,value) => acc*value,1);
    console.log(result);
  }
  catch(error){
    console.log(error);
  }
}
caller();