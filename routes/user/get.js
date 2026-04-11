import mongoose from "../../db/index.js";
import { userSchema } from "../../schema/index.js";

const getUsers = async (req, res) => {
  const Users = mongoose.model("Users", userSchema);
  try {
    const allUsers = await Users.find();
    res.status(200).send({
      message: "Users fatched successfully",
      data: allUsers,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getUsers;
