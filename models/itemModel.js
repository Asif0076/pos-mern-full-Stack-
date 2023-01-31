const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{timestamp:true})

const Items = mongoose.model('Item',itemSchema, {
    new:true
});

module.exports = Items;