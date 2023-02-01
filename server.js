const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const port = process.env.PORT || 6000;
const connectionDB = require('./config/config')
//dotenv config
dotenv.config()

// db config
connectionDB();

//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))

//routes
app.use('/api/items', require('./routers/itemRouter'))
 
//listen
app.listen(port, () => {
  console.log(`Listening at Port : ${port}`)
})
