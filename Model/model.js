const mongoose = require('mongoose')
const HospitalSchema = mongoose.Schema({
   name : String,
   city : String,
   img : String,
   spec : String,
   rating : Number,
   desc : String,
   noDoctor : Number,
   noDepartment : Number
})
const Hospitals = mongoose.model("Hospital" , HospitalSchema)
module.exports = Hospitals