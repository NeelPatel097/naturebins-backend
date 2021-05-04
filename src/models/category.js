const mongoose = require('mongoose');
const categorySchemea = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    categoryImage: {
        type: String
    },
    parentId: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchemea);