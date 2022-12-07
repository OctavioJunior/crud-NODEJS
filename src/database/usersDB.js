const MONGO_URI =
  "mongodb+srv://octaviojunior:teste123@crud-basico.hczujcl.mongodb.net/?retryWrites=true&w=majority";

const mongoose = require("mongoose");

mongoose.set({ strictQuery: false }); //usado para evitar erro no console

const connect = async () => {
  await mongoose.connect(MONGO_URI).then(() => {
    console.log("Connected at Database");
  });
};

connect();

module.exports = connect;
