const https = require('https')
const express = require('express')
const app = express()


app.get("/", (req, res) => {
  res.send("hewoo!")
})



app.listen(3000, () => {
  console.log("hewoo")
})
