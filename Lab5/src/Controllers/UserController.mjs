import { User } from "../Model/User.mjs";
import bcrypt from 'bcrypt';
import { ExpressError } from "../utils/ExpressError.mjs";

export { register, login, index, show, destory, update };

async function register(req, res) {
    const { email, name, password, address, age } = req.body;
    const foundUser = await User.findOne({ email }).lean();
    if (foundUser) {
        throw new ExpressError('user already exists', 409);
    }
    const newUser = new User();
    const saltRounds = 10;
    const hashePassword = await bcrypt.hash(password, saltRounds);
    newUser.password = hashePassword;
    newUser.email = email;
    newUser.name = name;
    newUser.address = address;
    newUser.age = age;
    await newUser.save();
    return res.status(200).json({ "message": "Account created" });
}

async function login(req, res) {
    const { email, password, } = req.body;
    const foundUser = await User.findOne({ email }).lean();
    if (!foundUser) {
        throw new ExpressError('worng password or user does not exists', 401);
    }
    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
        throw new ExpressError('worng password or user does not exists', 401);
    }
    return res.status(200).json({ "message": "successfully logged in" }); // this should be a jwt in a real web app :D
}


async function index(req, res) {
    const users = await User.find().lean();
    users.forEach((user) => delete user.password)
    return res.status(200).send(users)
}

async function show(req, res) {
    const user = await User.findById(req.params.id).lean();
    delete user.password
    return res.status(200).send(user)
}

async function destory(req, res) {
    const result = await User.deleteOne({ _id: req.params.id });
    if (result.deletedCount == 0) {
        throw new ExpressError('User does not exists', 404);
    }

    return res.status(200).send({ "message": "user is deleted" })

}
async function update(req, res) {
    const foundUser = await User.findById(req.params.id);
    if (!foundUser) {
        throw new ExpressError('invalid user', 401);
    }
    const { email, name, address, age } = req.body;
    foundUser.email = email;
    foundUser.name = name;
    foundUser.address = address;
    foundUser.age = age;
    foundUser.save()
    return res.status(200).send({ "message": "user is updated" })

}