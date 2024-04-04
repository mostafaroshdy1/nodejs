export { userSchema, userSchemaUpdate }



const userSchema = {
    type: 'object',
    properties: {
        name: { type: 'string', minLength: 1 },
        age: { type: 'number', minimum: 0 },
        address: { type: 'string' },
        email: { type: 'string', format: 'email' },
        password: { type: 'string', minLength: 6 },
    },
    required: ['name', 'email', 'password'],
    additionalProperties: false
};


const userSchemaUpdate = {
    type: 'object',
    properties: {
        name: { type: 'string', minLength: 1 },
        age: { type: 'number', minimum: 0 },
        address: { type: 'string' },
        email: { type: 'string', format: 'email' },
        password: { type: 'string', minLength: 6 },
    },
    required: ['name', 'email'],
    additionalProperties: false
};


