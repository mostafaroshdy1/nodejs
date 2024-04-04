import express from 'express';
import { catchAsync } from '../utils/catchAsync.mjs';
import * as item from '../Controllers/ItemController.mjs';
import { validateItem } from '../Middleware/validateItem.mjs';
export { router }

const router = express.Router();


router.route('/')
    .post(validateItem, catchAsync(item.create))
    .get(catchAsync(item.index))


router.route('/:id')
    .get(catchAsync(item.show))
    .delete(catchAsync(item.destory))
    .put(validateItem, catchAsync(item.update))

