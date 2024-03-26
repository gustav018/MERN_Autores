const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "First name is required"],
        minlength: [3, "First name must be at least 3 characters long"],
    },
    price: {
        type: Number,
        required: [true, "price is required"],
        min: [0, "Price must be at least 0"],

    },
    descripcion: {
        type: String,
        required: [true, "Descripcion name is required"],
        minlength: [3, "Descripcion must be at least 3 characters long"],
        validate: {
            validator:  (value) => /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]*$/.test(value),
            message: "Descripcion must contain only letters",
        },
    }
    
}, { timestamps: true });

module.exports.ProductModel = mongoose.model('Product', ProductSchema);

