const itemModel = require('../models/itemModel')

//get items
const getItemController = async (req,res) => {
try {
    const items = await itemModel.find()
    res.status(200).send(items)
} catch (error) {
    console.log(`Get Item Error ${error}`);
}
}

//add / post items
const addItemController = async (req,res) => {
try {
    const newItem = new itemModel(req.body);
    await newItem.save();
    res.status(201).send('Item created Succesfully') 
} catch (error) {
    res.status(400).send(error)
    console.log(`Post Item Error ${error}`);
}
}


module.exports = {getItemController, addItemController}