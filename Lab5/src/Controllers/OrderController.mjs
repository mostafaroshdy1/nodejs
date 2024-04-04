import { Order } from "../Model/Order.mjs";
import { ExpressError } from "../utils/ExpressError.mjs";

export { create, index, show, destroy, update };

async function create(req, res, next) {
    const { totalPrice, items } = req.body;
    try {
        const newOrder = new Order({
            totalPrice,
            items
        });
        await newOrder.save();
        res.status(201).json({ message: "Order created" });
    } catch (error) {
        next(error);
    }
}

async function index(req, res, next) {
    try {
        const orders = await Order.find().lean();
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
}

async function update(req, res, next) {
    try {
        const foundOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!foundOrder) {
            throw new ExpressError('Invalid Order', 404);
        }
        res.status(200).json({ message: "Order updated", order: foundOrder });
    } catch (error) {
        next(error);
    }
}

async function show(req, res, next) {
    try {
        const order = await Order.findById(req.params.id).lean();
        if (!order) {
            throw new ExpressError('Order not found', 404);
        }
        res.status(200).json(order);
    } catch (error) {
        next(error);
    }
}

async function destroy(req, res, next) {
    try {
        const result = await Order.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) {
            throw new ExpressError('Order does not exist', 404);
        }
        res.status(200).json({ message: "Order deleted" });
    } catch (error) {
        next(error);
    }
}
