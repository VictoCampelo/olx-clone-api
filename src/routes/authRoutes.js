import { Router } from "express";

const router = Router

router.post ('/user/signin', signin)
router.post ('/user/signup', signup)

export default router