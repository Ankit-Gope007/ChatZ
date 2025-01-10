import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
import multer from "multer";
import { signUp,login,updateProfile , getProfile } from "../controllers/Profile.controller.js";


const router = Router()

router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/update-profile").post(verifyJWT,updateProfile)
router.route("/get-profile").get(verifyJWT,getProfile)

export default router;