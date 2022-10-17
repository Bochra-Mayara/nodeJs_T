const { createReadStream}= require('fs')
const { result } = require('lodash')


const stream = createReadStream('./content/big.txt', { highWaterMark: 90000})



stream.on('data', (result) => {
    console.log(result)
})


stream.on('error', (err) => console.log(err))