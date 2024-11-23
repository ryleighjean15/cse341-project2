const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Items API',
        description: 'API documentation for the Items API',
    },
    host: 'localhost:5001', 
    schemes: ['http', 'https'], 
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/itemRoutes.js'];

// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
