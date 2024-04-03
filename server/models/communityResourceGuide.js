// Community Resource Guide Model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CategorySchema = require("./category");

const CommunityResourceGuideSchema = new Schema({
  Categories: [CategorySchema]
});

const CommunityResourceGuide = mongoose.model("CommunityResourceGuide", CommunityResourceGuideSchema);

module.exports = CommunityResourceGuide;
