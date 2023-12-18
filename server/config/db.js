const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI

const connect = async ()=>{
    try{
        await mongoose.connect(MONGODB_URI);
        console.log('mongoDB connected successfully');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;