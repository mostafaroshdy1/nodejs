import { userSchema, userSchemaUpdate } from "../validationSchema.mjs";
import { ExpressError } from "../utils/ExpressError.mjs";
import Ajv from 'ajv';
import addFormats from "ajv-formats"

export { validateUser, validateUserUpdate }


const ajv = new Ajv({ allErrors: true, coerceTypes: true });
addFormats(ajv)

function validateUser(req, res, next) {
    const valid = ajv.validate(userSchema, req.body);
    if (!valid) {
        throw new ExpressError('Invalid request data', 400);
    };
    next();
}
function validateUserUpdate(req, res, next) {
    const valid = ajv.validate(userSchemaUpdate, req.body);
    if (!valid) {
        throw new ExpressError('Invalid request data', 400);
    };
    next();
}