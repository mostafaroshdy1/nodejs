import express from 'express';
import { connectToDB } from './src/utils/db.mjs'
import { tryCatch } from './src/utils/tryCatch.mjs';
import { router as userRoutes } from './src/Routes/UserRoutes.mjs'
import { router as itemRoutes } from './src/Routes/ItemRouts.mjs'
import { router as orderRoutes } from './src/Routes/OrderRoutes.mjs'
import { ExpressError } from './src/utils/ExpressError.mjs';


tryCatch(connectToDB);

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/orders', orderRoutes);



//  Any Invalid routes
app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})


//Error handling middleware
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oh No, Something Went Wrong"
    return res.status(statusCode).json(err.message);
})

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
});