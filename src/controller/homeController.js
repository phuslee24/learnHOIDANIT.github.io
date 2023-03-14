import db from "../models/index"; //nhan du lieu tu mysql
import CRUDService from "../services(chocdata)/CRUDService";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("------------------");
    console.log(data);
    console.log("------------------");
    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};
let getcrudPage = (req, res) => {
  return res.render("Crud.ejs");
};

let postCrud = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("check");
};
let displayGetCrud = async (req, res) => {
  let data = await CRUDService.getAllUser();
  console.log("......");
  console.log(data);
  console.log(".....");
  return res.render("./displayCrud.ejs", {
    datatable: data,
  });
};
let getEditCrud = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDService.getUserById(userId);
    console.log("/////////");
    console.log(userData);
    console.log("/////////");
    return res.render("editCrud.ejs", {
      user: userData,
    });
  } else {
    return res.send("user not found");
  }
};
let putCrud = async (req, res) => {
  let data = req.query;
  await CRUDService.updateUserData(data);
  return res.redirect("/get-crud");
};
let deleteCrud = async (req, res) => {
  let uid = req.query.id;
  if (uid) {
    await CRUDService.deleteUserById(uid);
    return res.redirect("/get-crud");
    redi;
  } else {
    return res.send("user not found");
  }
};

/*Object:{
    key:'',
    value:''
 }*/
module.exports = {
  getHomePage: getHomePage,
  getcrudPage: getcrudPage,
  postCrud: postCrud,
  displayGetCrud: displayGetCrud,
  getEditCrud: getEditCrud,
  putCrud: putCrud,
  deleteCrud: deleteCrud,
};
