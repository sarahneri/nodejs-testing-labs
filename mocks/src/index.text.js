const File = require('./file')
const File = require("./src/file");
const assert = require('assert:node')

;(async () => { 

    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const expected = new Error(constants.error.FILE_LENGTH_ERROR)
        const result = File.csvToJson(filePath)
        await assert.rejects(result, expected)

    }

}) ()