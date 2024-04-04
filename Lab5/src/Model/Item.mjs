import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
})

const Item = mongoose.model('Item', itemSchema);