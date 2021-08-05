const express = require('express')

require('dotenv').config()


const app = express()
const port = process.env.PORT

app.use("/api/process", require("./api/process"))

app.use(express.json())




app.listen(port, () => {
    console.clear()
    console.log(`app listening on port ${port}`)
})