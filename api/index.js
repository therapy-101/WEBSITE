const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Sample API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Export Express app for Vercel
module.exports = app;