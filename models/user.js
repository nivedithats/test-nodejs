const { model } = require("mongoose")
const { createModal } = require("my-controllers")

const data = {
   username:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   } 
}

const usermodel = createModal(data, 'testusers')
module.exports = usermodel;