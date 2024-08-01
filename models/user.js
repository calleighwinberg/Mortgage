const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    email: {
        type: String, 
        required: true,
        unique: true
    }
});

UserSchema.plugin(passportLocalMongoose) ; //adds on username and password field , does everything! 

module.exports = mongoose.model('User', UserSchema) ;

