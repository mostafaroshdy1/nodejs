import { orderSchema } from "../validationSchema.mjs";
import { ExpressError } from "../utils/ExpressError.mjs";
import mongoose from "mongoose";
import Ajv from 'ajv';
import addFormats from "ajv-formats"

export { validateOrder }


const ajv = new Ajv({ allErrors: true, coerceTypes: true });



function validateOrder(req, res, next) {
    console.log(req.body)
    const valid = ajv.validate(orderSchema, req.body);
    if (!valid) {
        throw new ExpressError(ajv.errors, 400);
    };
    next();
}