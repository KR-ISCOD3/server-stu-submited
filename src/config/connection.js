const { config } = require("dotenv");
const mongoose = require("mongoose");
config();
const URL = process.env.URL_MOONGOOSE;
const connectdb = async () => {
    try{
        mongoose.connect(URL)
        .then(()=>{
            console.log("Connected established");
        })
    }catch(err){
        console.error("Connection is not established");
    }
}
module.exports = connectdb;