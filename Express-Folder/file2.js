
const express = require('express')
const app = express()
const path = require('path')

///Setup static and middleware

app.use(express.static('./public'))

app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, '././Nav-bar/index.html'))
})





app.all('*',(req,res) => {
    res.status(404).send('<h1>resource not found</h1>')

})


app.listen(5000, () => {
    console.log('server is listening on port 5000../')
})

///app.et
//app.post
//app.put
//app.delete
///app.all
//app.use
//app.listen
