const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/dynamicform", {
    //   useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Server connected to MongoDB");
    }).catch((err) => {
        console.log(err);
    });
};
module.exports= connectDB
