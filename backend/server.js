const express = require("express");
const connectDb = require("./db/dbConfig.js");
const authRoutes = require("./routes/authRoute.js");
const userRoutes = require("./routes/userRoute.js");
const postRoutes = require("./routes/postRoute");
// const commentRoutes = require("./routes/commentRoute");
const dotenv = require("dotenv");
const app = express();

//middlewares
dotenv.config();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);
// app.use("/api/comments", commentRoutes);

connectDb();
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(process.env.PORT, () => {
  console.log("app is running on port 5000");
});
