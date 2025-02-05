import User from "../../models/User.model.js";
import ApiResponse from "../../Utils/ApiResponse.js";
import bcrypt from "bcrypt";

const RegisterUser = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;

    const existedUser = await User.findOne({ email });

    if (existedUser) {
      return ApiResponse(res, false, null, "User already exists", 401);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin,
    });

    await newUser.save();

    // Return only the fields you need in the response
    return ApiResponse(
      res,
      true,
      { name: newUser.name, email: newUser.email },
      "User created successfully",
      200
    );
  } catch (error) {
    return ApiResponse(res, false, error.message, 500);
  }
};

export default RegisterUser;
