import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/blogRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Mongo DB connected successfully");
    app.listen(PORT, () => {
      console.log(`Serve started at Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log({ errorMessage: error.message });
  });

app.use("/api", route);
