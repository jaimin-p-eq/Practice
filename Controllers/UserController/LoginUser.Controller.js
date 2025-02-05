import User from "../../models/User.model.js";
import bcrypt from "bcrypt";
import ApiResponse from "../../Utils/ApiResponse.js";

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return ApiResponse(res, false, "Invalid credentials", 400);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return ApiResponse(res, false, "Invalid credentials", 400);
    }

    return ApiResponse(res, true, user, "User successfully loggedin", 200);
  } catch (error) {
    return ApiResponse(res, false, error.message, 500);
  }
};

export default LoginUser;
