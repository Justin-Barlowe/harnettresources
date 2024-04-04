// Agency Schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AgencySchema = new Schema({
  Category: { type: String, required: true },
  AgencyName: { type: String, required: true },
  Address: String,
  Phone: String,
  Email: String,
  Website: String,
  ServicesOffered: String,
  ContactPerson: String,
});

// Convert the schema into a model
const Agency = mongoose.model('Agency', AgencySchema, 'agencies');

// Export the model
module.exports = Agency;
