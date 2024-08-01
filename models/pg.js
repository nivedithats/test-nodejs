const { createModal } = require("my-controllers")

const users = {
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    adharnumber:{
        type:String,
        required:true
    },
    joiningdate:{
        type:String,
        required:true
    }
}

const pguser =  createModal(users, 'pgusers')
 module.exports = pguser;