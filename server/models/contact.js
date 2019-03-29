//File Name: contact.js
//Name: Khushboo Sakervala
//Student ID: 300984318
//Date: March 28, 2019

let mongoose = require("mongoose");

// create a model class
let contactSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    age: Number
  },
  {
    collection: "contact-list"
  }
);

module.exports = mongoose.model("assignment2-contacts", contactSchema);
