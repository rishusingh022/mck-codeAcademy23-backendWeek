const fs = require('fs')

fs.readFile('../textFiles/1.txt', 'utf-8', (error, content) => {
    if (error) throw error
    else {
        console.log(content)
        fs.readFile('../textFiles/2.txt', 'utf-8', (error, content) => {

            if (error) throw error
            else {
                console.log(content)
                fs.readFile('../textFiles/3.txt', 'utf-8', (error, content) => {

                    if (error) throw error
                    else {
                        console.log(content)
                        fs.readFile('../textFiles/4.txt', 'utf-8', (error, content) => {

                            if (error) throw error
                            else {
                                console.log(content)
                                fs.readFile('../textFiles/5.txt', 'utf-8', (error, content) => {

                                    if (error) throw error
                                    else {
                                        console.log(content)
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})