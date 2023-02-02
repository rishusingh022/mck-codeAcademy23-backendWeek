const fs = require('fs');

const readFileCustom = (fileName) => {
  fs.readFile(`../textFiles/${fileName}`,'utf-8',(error,content) => {
    if(error) throw error;
    console.log(content);
  });    
};
for(let i =1 ; i<=5 ; i++){
  readFileCustom(`${i}.txt`);
}