const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({

    title:{
        type:String,
        required:[true, "please include the product title"]
    },

    description:{
        type:String,
        required:[true, "please include a product description"]
    },

    image:{
        type:String,
        required:[true,"please include the product url"]
    },



    category:{
        type:String,
        required:[true,"please include the product category"]
    },

    price:{
        type:Number,
        required:[true,"please include the product price"]
    }

},{timestamps:true})

// export the model

const PRODUCT = mongoose.model('product',productSchema);

module.exports = PRODUCT
