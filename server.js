const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const app = express()




mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to mongodb")
    })
    .catch((err) => {
        console.error("the is an issue with you connection:", error)
    })

app.listen(3000, (() => {
    console.log("server is running")
})
)

