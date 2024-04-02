const express = require('express');
const dontenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dontenv.config();

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Harnett County Resource Site API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'],
};

const openapiSpecification = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

mongoose.connect(process.env.dbconn).then(() => {
  console.log('Connected to MongoDB');
}
).catch((err) => {
  console.log('Error connecting to MongoDB', err);
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
