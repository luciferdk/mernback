// const mongoose = require("mongoose");
// mongoose.connect ("mongodb://127.0.0.1:27017/make", {
//   useNewUrlParser:true,
//   useUnifiedTopology:true,
//   useCreateIndex: true,
//   useFindAndModify: false


const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/make", {
  useNewUrlParser: true,
  useUnifiedTopology: true
 
}).then(() => {
  console.log("Connection succeeded");
}).catch((e) => {
  console.log(`Connection failed: ${e}`);
});