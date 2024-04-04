export { userSchema, userSchemaUpdate, itemSchema, orderSchema }



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



const itemSchema = {
    type: 'object',
    properties: {
        name: { type: 'string', minLength: 1 },
        price: { type: 'number', minimum: 0 },
        description: { type: 'string' }
    },
    required: ['name', 'price', 'description'],
    additionalProperties: false
};


const orderSchema = {
    type: 'object',
    properties: {
        totalPrice: { type: 'number' },
        items: {
            type: 'string',

        }
    },
    required: ['totalPrice', 'items'],
    additionalProperties: false
};