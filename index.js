const express = require('express')
const app = express()
const cors = require("cors")
const connectMongoDb = require('./Database/connect')
const port = 3000
const Router = require('./Router/routes')
app.use(cors())
app.use(express.json())

connectMongoDb();
app.use("/api/v1" ,Router )

app.listen(port, () => {
  console.log("server started")
})