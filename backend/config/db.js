import mongoose from "mongoose";

// connect to the mongoDB collection
const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://chatApp:chatApp@cluster0.bgkrb.mongodb.net/ChatApp?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    )
    .then((res) =>
      console.log(
        `MongoDB Connected: ${res.connection.host}`.cyan.underline.bold
      )
    )
    .catch((err) => {
      console.error(`Error: ${err.message}`.red.underline.bold);
      process.exit(1);
    });
};

export default connectDB;
