const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port

mongoose.set("useCreateIndex", true); 
mongoose
  .connect(config.mongoose.url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB at", config.mongoose.url);
  })
  .catch((err) => {
    console.log("Error", err);
  });

app.listen(config.port, () => {
  console.log("Server started listening at", config.port); 
});
