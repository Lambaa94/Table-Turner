const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Project-Three"
  );


const orderSeed = [
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 1,
        order: "Chicken",
        allergies: {
          gluten: false,
          nuts: false,
          eggs: true,
          pork: false,
          dairy: false,
          lily: false,
          shellfish: false,
          alcohol: false,
        },
        extra_notes: "Please put the sauce on the side",
        label: "1",
        course: "1"
    },
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 1,
        order: "Tacos",
        allergies: "Shellfish",
        extra_notes: "",
        label: "2",
        course: "1"
    },
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 1,
        order: "Shrimp",
        allergies: "Gluten",
        extra_notes: "",
        label: "3",
        course: "1"
    },
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 1,
        order: "Salad",
        allergies: "",
        extra_notes: "Please put the dressing on the side",
        label: "4",
        course: "1"
    },
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 2,
        order: "Steak",
        allergies: "",
        extra_notes: "",
        label: "1",
        course: "1"
    },
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 2,
        order: "Pasta",
        allergies: "",
        extra_notes: "Please bring out extra cheese",
        label: "2",
        course: "1"
    },
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 2,
        order: "Fish",
        allergies: "Alcohol",
        extra_notes: "",
        label: "3",
        course: "1"
    },
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 2,
        order: "Chicken",
        allergies: "",
        extra_notes: "no walnuts",
        label: "4",
        course: "1"
    },
    {
        //table number, order, {allergy items}, extra_notes, label
        table: 3,
        order: "Salad",
        allergies: "",
        extra_notes: "",
        label: "1",
        course: "1"
    },
    
];



db.Order
  .remove({})
  .then(() => db.Order.collection.insertMany(orderSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });