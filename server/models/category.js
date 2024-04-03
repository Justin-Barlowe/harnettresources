// category schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AgencySchema = require("./agency");

const CategorySchema = new Schema({
  CategoryName: { type: String, required: true },
  Agencies: [AgencySchema]
});

module.exports = CategorySchema;
