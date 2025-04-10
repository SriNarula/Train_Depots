const mongoose = require("mongoose");

const depotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  image: { type: String, required: true },
  description: { type: String, required: true },
  washingLine: {
    capacity: { type: String },
    techniques: [{ type: String }],  
    features: [{ type: String }]     
  },
  sickLine: {
    tasks: [{ type: String }],      
    capacity: { type: String, required: true },
    equipment: [{ type: String }]    
  }
});

module.exports = mongoose.model("Depot", depotSchema);
