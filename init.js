import dotenv from "dotenv";
import "./db";
import app from "./app";
dotenv.config();

const PORT = process.env.PORT || 4000;

import "./models/Video";
import "./models/Comment";
import "./models/User";

const handleListening = () =>
  console.log(`Listening in: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
