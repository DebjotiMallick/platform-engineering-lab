import express from "express";
import mongoose from "mongoose";

const router = express.Router();

const MessageSchema = new mongoose.Schema({
  text: String
});

const Message = mongoose.model("Message", MessageSchema);

// Seed data once (idempotent-ish)
async function seedMessages() {
  const count = await Message.countDocuments();
  if (count === 0) {
    await Message.insertMany([
      { text: "Hello from MongoDB" },
      { text: "Node.js backend running" },
      { text: "Kubernetes ready demo app" }
    ]);
    console.log("🌱 Seeded messages collection");
  }
}

seedMessages();

router.get("/", async (req, res) => {
  const messages = await Message.find().select("-__v");
  res.json(messages);
});

export default router;
