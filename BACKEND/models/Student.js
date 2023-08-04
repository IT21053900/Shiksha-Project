const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    dob: {
        type : String,
        require : true
    },
    grade : {
        type : String,
        require : true
    },
    gender : {
        type : String,
        require : true
    },
    telephone : {
        type : String,
        require : true
    },
    
    password : {
        type : String,
        require : true
    }
})

const Student = mongoose.model("Student", StudentSchema)
module.exports = Student;