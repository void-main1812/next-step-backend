import { createUser, deleteUser, updateUser } from "../controllers/user.controller";
import { Router } from "express";

const userRoutes: Router = Router();

userRoutes.post("/create", createUser);
userRoutes.delete("/delete", deleteUser);
userRoutes.put("/update", updateUser);

export default userRoutes;