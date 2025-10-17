import express from 'express';
import { getUser, createUser, updateUser, deleteUser} from "../controllers/userController.js";
import { validateUser } from "../validators/userValidator.js";

const router = express.Router();

router.get("/", getUser);
router.post("/", validateUser, createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);


export default router;