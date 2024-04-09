// app.js
// Justin Barlowe
// Server file.

"use strict";

// Importing the necessary modules.
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Importing the routes.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// dotenv configuration.
dotenv.config();

// Importing the routes.
const ResourceAPI = require('./routes/resourcesAPI');
const cateogryAPI = require('./routes/categoryAPI');

// Swagger options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Harnett County Resource Site API',
      version: '1.0.0',
    },
  },
  apis: ["./server/routes/*.js", "./server/api/*.yaml"],
};

const openapiSpecification = swaggerJsdoc(swaggerOptions);

// OpenAPI Specification
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use('/api/resources', ResourceAPI);
app.use('/api/category', cateogryAPI);


// Connect to the database.
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

// Set port.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log(openapiSpecification);

module.exports = app;
