import User from "../../models/User.model.js";
import bcrypt from "bcrypt";
import ApiResponse from "../../Utils/ApiResponse.js";

const UpdateUser = async (req, res) => {
  try {
    const { id, name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const UpdatedUser = User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        password: hashedPassword,
      },
      { new: true }
    );

    if (!UpdateUser) {
      return ApiResponse(res, false, null, "User not found", 401);
    }

    return ApiResponse(
      res,
      true,
      { name: UpdatedUser.name },
      "Use Updated Successfully",
      200
    );
  } catch (error) {
    return ApiResponse(res, false, null, error.message, 500);
  }
};

export default UpdateUser;
