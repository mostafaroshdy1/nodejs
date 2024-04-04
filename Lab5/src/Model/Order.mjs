import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    totalPrice: Number,
    items: [{
        type: ObjectId,
        ref: 'Item'
    }]
})

const Order = mongoose.model('Order', orderSchema);