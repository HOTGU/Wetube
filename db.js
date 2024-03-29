import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connect to DB");
const handleError = error => console.log(`ERROR on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
