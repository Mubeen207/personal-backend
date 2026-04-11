import {userSchema} from "../../schema/index.js";
import mongoose from "../../db/index.js";

const postUser = async (req, res) => {
 const Users = mongoose.model("Users", userSchema);
  try {
    const { name, email, password } = req.body;
    const newUser = new Users({ name, email, password });
    const savedUser = await newUser.save();
    res.status(200).send({
      message: "User successfully Added",
      data: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export default postUser;
