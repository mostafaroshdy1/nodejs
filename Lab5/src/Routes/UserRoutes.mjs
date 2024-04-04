import express from 'express';
import { User } from '../Model/User.mjs';
import { catchAsync } from '../utils/catchAsync.mjs';
import * as user from '../Controllers/UserController.mjs';
import { validateUser, validateUserUpdate } from '../Middleware/validateUser.mjs';

export { router }

const router = express.Router();

router.route('/register')
    .post(validateUser, catchAsync(user.register))


router.route('/login')
    .post(catchAsync(user.login))


router.route('/')
    .get(catchAsync(user.index))


router.route('/:id')
    .get(catchAsync(user.show))
    .delete(catchAsync(user.destory))
    .put(validateUserUpdate, catchAsync(user.update))