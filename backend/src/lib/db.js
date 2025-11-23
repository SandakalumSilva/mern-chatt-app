import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
  dotenv.config();
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DB connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
