import db from "../models/index";
import bcrypt from "bcryptjs";

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);

      if (isExist) {
        //user already exist
        //compare password
        let user = await db.User.findOne({
          attributes: ["email", "roleId", "password"],
          where: { email: email },
          raw: true,
        });
        if (user) {
          // let check = await bcrypt.compareSync(password, user.password);
          let check = await bcrypt.compare(password, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = " ok";

            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 4;
            userData.errMessage = " err password";
          }
        } else {
          userData.errCode = 3;
          userData.errMessage = "your's user isn't exist";
        }
      } else {
        // return err
        userData.errCode = 2;
        userData.errMessage = "your's email isn't exist";
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
  checkUserEmail: checkUserEmail,
};
