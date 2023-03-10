import express from "express";
import bodyParser from "body-parser"; //ho tro lay tham so client ho tro
// /user?id=7//
import viewEngine from "./config(cauhinhthamso)/viewEngine";
import initWebRouter from "./route/web";
import connectDB from "./config/connectDB";

require("dotenv").config();
let app = express();
//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouter(app);
connectDB();

let port = process.env.PORT;
//port === undifined => 6969
app.listen(port, () => {
  // callback
  console.log("backend nodejs is running on the port :" + port);
});
