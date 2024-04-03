// Agency Schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AgencySchema = new Schema({
  AgencyName: { type: String, required: true },
  Address: String,
  Phone: String,
  Email: String,
  Website: String,
  ServicesOffered: String,
  ContactPerson: String,
});

module.exports = AgencySchema;
