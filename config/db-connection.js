const mongoose = require("mongoose");

mongoose
   .connect(process.env.MONGO_URI)
   .then(() => {
      console.log(`Connected to MongoDB database: ${mongoose.connection.name}`);
   })
   .catch((error) => {
      console.log("Error connecting to MongoDB: ", error);
   });

mongoose.connection.once("error", (error) => {
   console.log("There has been an error with MongoDB: ", error);
});
