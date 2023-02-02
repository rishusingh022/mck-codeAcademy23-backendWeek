const fs = require('fs');

function readFileCustom(filename , ans) {
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
        resolve({content,ans});
      }
    });
  });
}

readFileCustom('1.txt',1)
  .then (({content,ans}) => {
    return readFileCustom('2.txt',ans * parseInt(content));
  })
  .catch (error => {
    console.log(error);
  })
  .then (({content,ans}) => {
    return readFileCustom('3.txt',parseInt(content)*ans);
  })
  .catch (error => {
    console.log(error);
  })
  .then (({content,ans}) => {
    return readFileCustom('4.txt',parseInt(content)*ans);
  })
  .catch (error => {
    console.log(error);
  })
  .then (({content,ans}) => {
    return readFileCustom('5.txt',parseInt(content)*ans);
  })
  .catch (error => {
    console.log(error);
  })
  .then (({content,ans}) => {
    console.log(parseInt(content)*ans);
  })
  .catch (error => {
    console.log(error);
  });