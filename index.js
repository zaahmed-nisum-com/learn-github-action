const express = require('express')
const app = express()
const port = 3002
const fs = require("fs");

app.get('/', (req, res) => {
    res.send({ message: "all good" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})