import mongoose from 'mongoose';

export { Item }
const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
})

const Item = mongoose.model('Item', itemSchema);