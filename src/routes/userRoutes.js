import { Router } from "express";
import {getStates} from "../controllers/UserController.js"

const router = Router()


router.get("/states", getStates)

//router.get("/user/me", info)
//router.put("/user/me", update)

export default router