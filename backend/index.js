require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const {HoldingModel} = require("./model/HoldingModel");
const {PositionModel} = require("./model/PositionModel");
const { OrderModel } = require("./model/OrderModel");


app.get("/allHoldings",async(req,res)=>{
   let allHoldings = await HoldingModel.find({});
   res.json(allHoldings);
})
app.get("/allPositions",async(req,res)=>{
   let allPositions = await PositionModel.find({});
   res.json(allPositions);
})

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.listen(PORT,()=>{
    console.log("Server start on port 3002");
    mongoose.connect(uri);
    console.log("DB connected");
});