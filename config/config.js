const mongoose = require('mongoose')

//connection 
const connectionDB = async () => {
  try{
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/pos', { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useUnifiedTopology:true
    });
    console.log(`Mongodb Connection is Successfull in Local Host ${conn.connection.host}`);
  }catch(err){
    console.log(`Mongodb Connection is Failed ${err.message}`);
    process.exit(1)
  }
}
//export
module.exports = connectionDB