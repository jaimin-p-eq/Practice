import dotenv from "dotenv";
import dbConnect from "./db.js";
import express from "express";
import UserRoute from "./Routes/User.Routes.js";

dotenv.config();
const app = express();

dbConnect();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  // Corrected response handling
  res.send("Hello Jaimin");
});

app.use("/api/user", UserRoute);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
