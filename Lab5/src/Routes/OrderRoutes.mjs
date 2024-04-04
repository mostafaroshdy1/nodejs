import express from 'express';
import { catchAsync } from '../utils/catchAsync.mjs';
import * as order from '../Controllers/OrderController.mjs';
import { validateOrder } from '../Middleware/validateOrder.mjs';
export { router }

const router = express.Router();


router.route('/')
    .post(validateOrder, catchAsync(order.create))
    .get(catchAsync(order.index))


router.route('/:id')
    .get(catchAsync(order.show))
    .delete(catchAsync(order.destroy))
    .put(validateOrder, catchAsync(order.update))

