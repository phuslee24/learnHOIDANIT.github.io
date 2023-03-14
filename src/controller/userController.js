import userService from "../services(chocdata)/userService";
let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "missing input paramater",
    });
  } else {
    let userData = await userService.handleUserLogin(email, password);

    //check email exist
    //compare password
    //return userInfor
    //access_ token : JWT json web token
    return res.status(200).json({
      userData,
      user: userData.user ? userData.user : {},
    });
  }
};
module.exports = {
  handleLogin: handleLogin,
};
