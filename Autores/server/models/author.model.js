const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "First name is required"],
        minlength: [3, "First name must be at least 3 characters long"],
    
    }
    
}, { timestamps: true });

module.exports.AuthorModel = mongoose.model('Author', AuthorSchema);

