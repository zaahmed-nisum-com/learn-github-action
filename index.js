const express = require('express')
const app = express()
const port = 3002
const fs = require("fs");


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send({ message: "all good" })
})

app.get('/health-check', (req, res) => {
    res.send({ message: "all good" })
})
