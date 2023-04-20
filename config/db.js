const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

 exports.connect = () => mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Successfully connected to mongodb");
})
.catch((error) => {
    console.log("error connecting to Database");
    console.error(error)
})


