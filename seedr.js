const mongoose = require('mongoose')
const dotenv =  require('dotenv');
const connectionDB = require('./config/config')
const itemModel = require('./models/itemModel')
const items = require('./utils/data')

// dotenv config
dotenv.config();
connectionDB()

// function seeder
const importData = async () => {
    try{
        await itemModel.deleteMany();
        const itemData = await itemModel.insertMany(items);
        console.log("All Items Added");
        process.exit()
    }catch(err){
        console.log(`Seedr Function Error ${err}`);
        process.exit(1)
    }
}
importData()