import { itemSchema } from "../validationSchema.mjs";
import { ExpressError } from "../utils/ExpressError.mjs";
import Ajv from 'ajv';
import addFormats from "ajv-formats"

export { validateItem }


const ajv = new Ajv({ allErrors: true, coerceTypes: true });
addFormats(ajv)


function validateItem(req, res, next) {
    const valid = ajv.validate(itemSchema, req.body);
    if (!valid) {
        throw new ExpressError('Invalid request data', 400);
    };
    next();
}