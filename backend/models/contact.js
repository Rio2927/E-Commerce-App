const mongoose = require('mongoose');


const leadSchema = new mongoose.Schema({

    email : {
        type : String,
        required : true
    },

    contact : {
        type : String,
        required : true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{ versionKey: false });

const Lead = mongoose.model('Lead',leadSchema);

module.exports = Lead;