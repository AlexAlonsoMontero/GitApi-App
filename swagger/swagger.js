const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
      title: 'Api para conectar con la Api de Github',
      description: 'Api para conectar con la Api de Github',
    },
    host: 'localhost:3000',
    schemes: ['http'],
  };

const outputFile = './swagger/swagger_output.json'
const endpointsFiles = ['./endpoints.js']

swaggerAutogen(outputFile, endpointsFiles, doc)
