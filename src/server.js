require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.post("/home", (req,res) => {
    console.log(req.method)
})

app.post("/login", (req,res) => {
    res.send("Hallo!")
})

app.listen(port, () => {
    console.log("The server is listening...")
})