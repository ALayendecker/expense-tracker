const mongoose = require("mongoose");

const connectDB = async () => {
  //async await lets us not do .then
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log(
      `MongDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`Error ${err.message}`);
  }
};
