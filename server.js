const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.use(express.static('public'));


////////////////// things that didn't quite work:

/* app.get('/circle/:name', (req, res) => {
  const name = req.params.name
  //const path = "../public" + `${name}.html`
  const path = "/Users/vitorabreu/Documents/CODE/SE_19/Assignments/week_4/backend/public/" + `${name}.html`
  res.sendFile(path)
}) *


/* app.get('/nova/:name', (req, res) => {
  const name = req.params.name
  res.sendFile(path.join(__dirname, `/${name}.html`))
}) */


////////////////// static (looks terrible for now, I'm sorry):

 app.get('/', (req, res) => {
   const name = req.params.name
   res.sendFile(path.join(__dirname,`/index.html`))
 })

 app.get('/index', (req, res) => {
  const name = req.params.name
  res.sendFile(path.join(__dirname,`/index.html`))
})

 app.get('/forest', (req, res) => {
  const name = req.params.name
  res.sendFile(path.join(__dirname,`/forest.html`))
})

 app.get('/limbo', (req, res) => {
  const name = req.params.name
  res.sendFile(path.join(__dirname,`/limbo.html`))
})

app.get('/anger', (req, res) => {
  const name = req.params.name
  res.sendFile(path.join(__dirname,`/anger.html`))
})

app.get('/fraud', (req, res) => {
  const name = req.params.name
  res.sendFile(path.join(__dirname,`/fraud.html`))
})

app.get('/gluttony', (req, res) => {
  const name = req.params.name
  res.sendFile(path.join(__dirname,`/gluttony.html`))
})

app.get('/greed', (req, res) => {
  const name = req.params.name
  res.sendFile(path.join(__dirname,`/greed.html`))
})

app.get('/heresy', (req, res) => {
  const name = req.params.name
  res.sendFile(path.join(__dirname,`/heresy.html`))
})

app.get('/lust', (req, res) => {
  const name = req.params.name
  res.sendFile(path.join(__dirname,`/lust.html`))
})

app.get('/end', (req, res) => {
  const name = req.params.name
  res.sendFile(path.join(__dirname,`/end.html`))
})

app.get('/violence', (req, res) => {
  const name = req.params.name
  res.sendFile(path.join(__dirname,`/violence.html`))
})

app.get('/treachery', (req, res) => {
  const name = req.params.name
  res.sendFile(path.join(__dirname,`/treachery.html`))
})

////////////////// dynamic:

app.get('/:name', (req, res) => {
  const name = req.params.name
  res.sendFile(path.join(__dirname,`/404.html`))
})

////////////////////////////

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})