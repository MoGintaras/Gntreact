const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const reciptSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    images:{
        type:Array,
        required: true
    },
    ingridients:{
        type:Array,
        required: true
    },
    preparation:{
        type:Array,
        required: true
    }

})

module.exports = mongoose.model("receiptModel",reciptSchema)