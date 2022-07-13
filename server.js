
const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger/swagger_output.json')


require('dotenv').config();
require('./endpoints')(app)



const principalRoute = `${process.env.HOST}:${process.env.PORT}`;

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile)
  );


app.listen( process.env.PORT,()=>{
    console.log(`Server is runing ${principalRoute}`);
})




// app.get("/async", async (req, res) => {
//     try {
//         const response = await axios({  
//             url: "https://api.github.com/repos/benawad/dogehouse/issues",
//             method: "get",
//         });
//         console.log(response.data, "data")
//         res.status(200).json(response.data);
//     } catch (err) {
//         res.status(500).json({ message: err });
//     }
// });