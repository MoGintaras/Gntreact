// const valid = require('./helpers/validate')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const recipeDB = require('./shema/receiptSchema')



const app = express()
app.listen(3001)
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_KEY, { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false })
    .then(info => {
        console.log("Connection was sucessfull")
    }).catch(e => {
    console.log(e)
    console.log("NOT sucessful")
})

app.post('/data', (req, res) => {
    console.log(req.body)
    console.log('got in back')
    res.send({success: true})
})