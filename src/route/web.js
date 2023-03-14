import express from "express";
import homeController from "../controller/homeController.js";
import userController from "../controller/userController";
let router = express.Router();
let initwebRouter = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/crud", homeController.getcrudPage);
  router.post("/post-crud", homeController.postCrud);
  router.get("/get-crud", homeController.displayGetCrud);
  router.get("/edit-crud", homeController.getEditCrud);
  router.get("/put-crud", homeController.putCrud);
  router.get("/delete-crud", homeController.deleteCrud);
  router.post("/api/login", userController.handleLogin);

  return app.use("/", router);
};
module.exports = initwebRouter;
