let express = require('express')
let app = express()
let ejs = require("ejs")
 
app.set('view engine','ejs')


app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000)