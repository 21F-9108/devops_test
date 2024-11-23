const mongoose = require('mongoose');
//const connect = mongoose.connect("mongodb://localhost:27017/bookstore");
const connect = mongoose.connect("mongodb://mongodb:27017/bookstore");


// Check database connected or not
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be efConnected");
})

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    verified:{
        type:Boolean,
        required:true
    },
    token:{
        type:String,
        default:""
    }

});

// const sessionSecret="mySessionSecret";

// collection part
const collection = new mongoose.model("books", Loginschema);

module.exports = {
    collection
}
    ;
