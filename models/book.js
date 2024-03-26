const mongoose = require ("mongoose");


const schema = new mongoose.Schema({
    book_id : {type : Number, required : true},
    titolo : {type : String, required : true},
    Author_name : {type : String, required : true},
    Author_sur : {type : String, required : true},
    Genre : {type : String, required : true},
    Is_available : {type : Boolean, required : true},
    Grade : {type : Number, required : true}
})

const Libro = mongoose.model("Libro", schema);
module.exports = Libro;