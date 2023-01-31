const mongoose = require('mongoose')

//connection
mongoose.connect('mongodb://127.0.0.1:27017/pos', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useUnifiedTopology:true
})
.then(() => {
  console.log('Mongodb Connection is Successfull in Local Host');
}).catch((err) => {
  console.log(`Mongodb Connection is Failed ${err.message}`);
})