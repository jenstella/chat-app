//constants
const { response } = require("express");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

const mongoose = require("mongoose");

// connection to database
mongoose.connect("mongodb://localhost:27017/Chat", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const chatDB = mongoose.connection;

chatDB.on("error", console.error.bind(console, "connection error:"));

// set up schema

const chatSchema = new mongoose.Schema({
  // keys are keys we expect in db and values are data types
  text: String,
});

// first arg = collection in db, if collection doesn't exist mongo will make it, second is schema prototype
const ChatModel = mongoose.model("chats", chatSchema);

//routing to my public folder
app.use(express.static("./public"));

// when the server visits localhost:5000/api...
app.get("/api", async (req, res) => {
  // find all documents in the chats collection (as defined above)
  const cursor = await ChatModel.find({});
  // create empty array to hold our results
  let results = [];
  // iterate over out cursor object to push each document into our array
  await cursor.forEach((text) => {
    results.push(text);
  });

  console.log(results)
  // send the resulting array back
  res.json(results);
});


app.get("*", (request, response) => {
  response.sendFile(path.resolve("./public/index.html"));
});

app.listen(port, () => {
  console.log("On port fucking", port);
});
