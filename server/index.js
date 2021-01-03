const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const MenuModel = require("./models/Menu");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Mickaela:SweetWonders123@sweetdb.wgsth.mongodb.net/<dbname>?retryWrites=true&w=majority",

  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {
  const foodName = req.body.foodName;
  const price = req.body.price;
  const category = req.body.category;
  const quantity = req.body.quantity;
  const units = req.body.units;

  const food = new MenuModel({
    foodName: foodName,
    price: price,
    category: category,
    quantity: quantity,
    units: units,
  });

  try {
    await food.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.get("/read", async (req, res) => {
  MenuModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.put("/update", async (req, res) => {
  const newFoodName = req.body.newFoodName;
  const newPrice = req.body.newPrice;
  const newCategory = req.body.newCategory;
  const newQuantity = req.body.newQuantity;
  const newUnits = req.body.newUnits;
  const id = req.body.id;

  try {
    await MenuModel.findById(
      id,
      (
        err,
        updatedFood,
        updatedPrice,
        updatedCategory,
        updatedQuantity,
        updatedUnits
      ) => {
        updatedFood.foodName = newFoodName;
        updatedPrice.foodName = newPrice;
        updatedCategory.foodName = newCategory;
        updatedQuantity.foodName = newQuantity;
        updatedUnits.foodName = newUnits;

        updatedFood.save();
        updatedPrice.save();
        updatedCategory.save();
        updatedQuantity.save();
        updatedUnits.save();
        res.send("update");
      }
    );
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await MenuModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

app.listen(3001, () => {
  console.log("server running on 3001...");
});
