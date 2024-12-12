const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name:{type:String,required:true},
    tel:{type:String,required:true},
    course:{type:String,required:true},
    time:{type:String,required:true},
    project_name:{type:String,required:true},
    gitlink:{type:String,required:true},
    linkDeploy:{type:String,required:false},
    date:{type:Date,default:Date.now},
})

const Students = mongoose.model('Students',dataSchema);

module.exports = Students;