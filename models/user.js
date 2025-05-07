const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
    }
});

User.plugin(passportLocalMongoose); // Adds username and password fields to the schema and handles hashing and salting

module.exports = mongoose.model("User", userSchema);