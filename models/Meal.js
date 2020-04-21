const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MealSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  spoonacularMealId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  servings: {
    type: Number,
    required: false,
  },
  preparationMinutes: {
    type: Number,
    required: false,
  },
  cookingMinutes: {
    type: Number,
    required: false,
  },
  servings: {
    type: Number,
    required: false,
  },
  pricePerServing: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

module.exports = Meal = mongoose.model("Meal", MealSchema);
