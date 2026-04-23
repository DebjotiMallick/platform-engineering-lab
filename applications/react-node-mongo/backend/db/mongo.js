import mongoose from "mongoose";

export async function connectMongo() {
  const mongoUri =
    process.env.MONGO_URI || "mongodb://localhost:27017/demo";

  try {
    await mongoose.connect(mongoUri);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection failed", err);
    process.exit(1);
  }
}
