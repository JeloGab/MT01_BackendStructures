import express from 'express';
import { getUser, createUser} from "../controllers/userController.js";
import { validateUser } from "../validators/userValidator.js";

const router = express.Router();

router.get("/", getUser);
router.post("/", validateUser, createUser);

export default router;