import { Item } from "../Model/Item.mjs"
import { ExpressError } from "../utils/ExpressError.mjs";

export { create, index, show, destory, update };


async function create(req, res, next) {
    const { name, description, price } = req.body;
    const newItem = new Item();
    newItem.name = name;
    newItem.description = description;
    newItem.price = price;
    await newItem.save();
    return res.status(200).json({ "message": "Item created" });
}

async function index(req, res, next) {
    const items = await Item.find().lean();
    res.status(200).json(items);
}

async function update(req, res, next) {
    const foundItem = await Item.findById(req.params.id);
    if (!foundItem) {
        throw new ExpressError('invalid item', 401);
    }
    const { name, description, price } = req.body;
    foundItem.name = name;
    foundItem.description = description;
    foundItem.price = price;
    foundItem.save()
    return res.status(200).send({ "message": "item is updated" })
}

async function show(req, res) {
    const item = await Item.findById(req.params.id).lean();
    return res.status(200).send(item);
}

async function destory(req, res) {
    const result = await Item.deleteOne({ _id: req.params.id });
    console.log(req.params.id);
    if (result.deletedCount == 0) {
        throw new ExpressError('Item does not exists', 404);
    }
    return res.status(200).send({ "message": "item is deleted" })
}