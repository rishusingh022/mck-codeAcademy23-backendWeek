const fs = require('fs')
fs.readFile('../textFiles/1.txt','utf-8',(error,fileContent) => {
    if(error) console.log(error)
    if(isNaN(fileContent)) throw error('is not a number')
    console.log(fileContent)
})
fs.readFile('../textFiles/2.txt','utf-8',(error,fileContent) => {
    if(error) console.log(error)
    if(isNaN(fileContent)) throw error('is not a number')
    console.log(fileContent)
})
fs.readFile('../textFiles/3.txt','utf-8',(error,fileContent) => {
    if(error) console.log(error)
    if(isNaN(fileContent)) throw error('is not a number')
    console.log(fileContent)
})
fs.readFile('../textFiles/4.txt','utf-8',(error,fileContent) => {
    if(error) console.log(error)
    if(isNaN(fileContent)) throw error('is not a number')
    console.log(fileContent)
})
fs.readFile('../textFiles/5.txt','utf-8',(error,fileContent) => {
    if(error) console.log(error)
    if(isNaN(fileContent)) throw error('is not a number')
    console.log(fileContent)
})

