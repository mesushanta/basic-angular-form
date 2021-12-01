const confiq=require('../config/config').get(process.env.NODE_ENV);

var mongoose=require('mongoose');

const friendSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    last_name:  {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
        unique: 1
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    favourite_language: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    is_best_friend: {
        type: Boolean,
        trim: true,
        default: false
    },
    avatar: {
        type: String,
        required: false,
        maxlength: 100
    },
    age: {
        type: Number,
        required: true,
        maxlength: 100
    },
},
{ timestamps: true }
);

module.exports=mongoose.model('Friend',friendSchema);