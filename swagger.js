const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Items API',
        description: 'API documentation for the Items API',
    },
    host: 'localhost:5000', // Replace with your Render domain when deployed
    schemes: ['http', 'https'], // Use https in production
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/itemRoutes.js'];

// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
