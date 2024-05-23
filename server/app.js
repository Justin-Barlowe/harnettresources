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

// dotenv configuration.
dotenv.config(); // Ensure this is at the top before using process.env

// Importing the routes.
const ResourceAPI = require('./routes/resourcesAPI');
const categoryAPI = require('./routes/categoryAPI');
// const signinApi = require('./routes/signinApi');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.use('/api/category', categoryAPI);
// app.use('/api/signin', signinApi);

// Serve static files from the Angular app
const staticPath = path.join(__dirname, '../dist/harnettresources/browser');
console.log('Static files path:', staticPath);  // Debug log
app.use(express.static(staticPath));

// Fallback route for client-side routing
app.get('*', (req, res) => {
  const indexPath = path.join(staticPath, 'index.html');
  console.log('Index file path:', indexPath);  // Debug log
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.log('Error sending file:', err);  // Log any errors
      res.status(500).send(err);
    }
  });
});

// Connect to the database.
console.log('MongoDB Connection String:', process.env.dbconn);
mongoose.connect(process.env.dbconn).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
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
