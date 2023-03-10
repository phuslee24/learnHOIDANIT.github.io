import db from "../models/index";
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
let gettestPage = (req, res) => {
  return res.render("test.ejs");
};
/*Object:{
    key:'',
    value:''
 }*/
module.exports = {
  getHomePage: getHomePage,
  gettestPage: gettestPage,
};
