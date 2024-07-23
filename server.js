const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'))
    console.log('Request accepted')
})


app.listen(4000,()=>{
    console.log('Server listening on 4000')
})