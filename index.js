const express = require("express")
const cors = require("cors")
const port = 3200

const app = express()
 
app.use(cors())
app.get('/ican',
(req,resp) =>{ resp.status(200).json({ivan:"fasf"})})

app.get('/teate',
(req,resp) =>{ resp.status(200).json({ivan:"fasf"})})

app.get('/cc',
(req,resp) =>{ resp.status(200).send({ivan:"fasf"})})


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
  })