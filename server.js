const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const port = process.env.PORT || 3000
require('./config/config')
//env config
dotenv.config()


//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))

//routes
app.get('/', (req, res) => {
  res.send('<h1>Pos BackEnd</h1>')
})

//listen
app.listen(port, () => {
  console.log(`Listening at Port : ${port}`)
})
