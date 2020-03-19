const mongoose = require("mongoose");

const connectDB = async () => {
  //async await lets us not do .then
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
  } catch (err) {}
};
