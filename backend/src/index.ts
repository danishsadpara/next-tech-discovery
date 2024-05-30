import express from "express";
import dotenv from "dotenv";

// load environment variables
dotenv.config({ path: ".env.local" });

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello Developers");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
