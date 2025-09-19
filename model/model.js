const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    quantity:{
        type:Number, 
        default: 0
    } ,
    price:{
        type:Number, 
        required:true
    }
})

const Item = mongoose.model('Item',itemSchema)

module.exports = Item