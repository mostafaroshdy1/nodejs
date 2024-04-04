import mongoose from 'mongoose';

export { Order }
const orderSchema = new mongoose.Schema({
    totalPrice: Number,
    items: [{
        type: mongoose.Types.ObjectId,
        ref: 'Item'
    }]
})

const Order = mongoose.model('Order', orderSchema);