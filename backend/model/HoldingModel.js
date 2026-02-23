const {model} = require("mongoose");
const {HoldingSchema} = require("../schemas/HoldingSchemas");


const HoldingModel = new model("holding",HoldingSchema);

module.exports = {HoldingModel}