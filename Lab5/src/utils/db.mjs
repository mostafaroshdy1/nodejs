import mongoose from 'mongoose';

export { connectToDB }
const dbName = `lab5Api`
async function connectToDB() {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);
    console.log(`Connected to Database: ${dbName}`);
}