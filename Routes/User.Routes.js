import { Router } from "express";
import RegisterUser from "../Controllers/UserController/RegisterUser.Controller.js";
import UpdateUser from "../Controllers/UserController/UpdateUser.Controller.js";
import LoginUser from "../Controllers/UserController/LoginUser.Controller.js";
import DeleteUser from "../Controllers/UserController/DeleteUser.Controller.js";
import GetAllUsers from "../Controllers/UserController/GetAllUsers.Controller.js";

const router = Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.post("/update-user", UpdateUser);
router.delete("/delete/:id", DeleteUser);
router.get("/get-all-user", GetAllUsers);

export default router;
