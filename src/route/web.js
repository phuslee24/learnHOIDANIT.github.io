import express from "express";
import homeController from "../controller/homeController.js";
let router = express.Router();
let initwebRouter = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/test", homeController.gettestPage);
  return app.use("/", router);
};
module.exports = initwebRouter;
