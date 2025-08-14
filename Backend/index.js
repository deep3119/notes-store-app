import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import noteRoute from "./route/note.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";
import mailRoute from "./route/mail.route.js"
import orderRoute from "./route/order.route.js"
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 5000;

const URI = process.env.MongoDBURI;

// connect to mongo db
try {

  mongoose.connect(URI)
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
} catch (error) {

  console.log("Error", error);

}

// define route

app.use("/note", noteRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);
app.use("/mail",mailRoute)
app.use("/order",orderRoute)

app.listen(PORT, () => {
  console.log(`Servering is listening on port ${PORT}`)
})