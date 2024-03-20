import express from "express"
import { loginController, registerController } from "../controllers/authController";
const authRouter = express.Router();

authRouter.get("/login", loginController)
authRouter.get("/register", registerController)
export default authRouter