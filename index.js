'use strict'
 
const { TheVideoConverter } = require('@the-/video-converter')
const fs = require('fs')
const path = require('path')


let originalFiles = []

// Parse file names
try {
    originalFiles = fs.readdirSync("./files")
} catch(e) {
    console.log(e)
}

function convertFile(file) {
    const converter = new TheVideoConverter()
    return converter.convertIntoMP4(file, file.replace('.avi', '.mp4'))
}

async function convertFiles(files) {
    const promises = files.map((file) => {
        const filePath = path.resolve('files',file)
        return convertFile(filePath)
    })
    return Promise.all(promises)
}

async function main(originalFiles) {
    console.time()
    await convertFiles(originalFiles)
    console.timeEnd()
}

main(originalFiles)
.catch((err) => console.error(err))
