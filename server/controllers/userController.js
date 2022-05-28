import User from "../models/User.js";


export const createUser = async (req, res) => {
  try {
    const { user } = req.body;
    const createdUser = new User({
      ...user,
    });
    const savedUser = await createdUser.save();
    res.cookie("drawing-is-fun-session", user._id);
    res.status(201).send(savedUser);
  } catch (error) {
    logger.error(`creating user ${error.message}`);
    res.status(500).send({
      message: {
        content: "An error occured creating user",
        info: error.message,
      },
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { user } = req.body;
    const foundUser = await User.findOne({
      username: user.username,
    });



    res.cookie("drawing-is-fun-session", foundUser._id);
    res.status(201).send(foundUser);
  } catch (error) {
    logger.error(`logging in ${error.message}`);
    res.status(500).send({
      message: {
        content: "An error occured logging in user",
        info: error.message,
      },
    });
  }
};

// export const logoutUser = async (req, res) => {
//   try {
//     const { user } = req;
//     const foundUser = await User.findOne({
//       username: user.username,
//     });
//     foundUser.status = "Offline";
//     await foundUser.save();
//     res.clearCookie("ct_session");
//     res.status(201).send("Successfully logged out");
//   } catch (error) {
//     logger.error(`logging out ${error.message}`);
//     res.status(500).send({
//       message: {
//         content: "An error occured logging out user",
//         info: error.message,
//       },
//     });
//   }
// };





