const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json()) // body parser
app.use(cors())
app.use("/api/todo", require("./routes/todo.routes"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resourse Not Founed" })
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: " Server Error " })
})

mongoose.connection.once("open", () => {
    console.log("mongoose connection successfully")
    app.listen(process.env.PORT, console.log("server running"))
})

