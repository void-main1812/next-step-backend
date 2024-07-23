import { createUser, deleteUser } from "../controllers/user.controller";
import { Router } from "express";

const userRoutes: Router = Router();

userRoutes.post("/create", createUser);
userRoutes.delete("/delete", deleteUser);

export default userRoutes;