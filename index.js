const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');


fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        fs.writeFile(path.join(__dirname, './result/posts.txt'), JSON.stringify(data), (err) => {
            if(err) {
                throw err
            }
            console.log('file saved')
        })
    }
    ).catch(err => console.log(err));
