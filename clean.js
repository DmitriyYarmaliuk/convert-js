const fs = require('fs')
const path = require('path')

try {
    fs.readdirSync("./files")
    .filter(file => file.includes('.avi'))
    .map(file => path.resolve('files', file))
    .forEach((path) => {
        fs.unlinkSync(path)
    })
} catch(err) {
    console.error(err)
}