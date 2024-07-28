import { createUser, deleteUser, getUser, updateUser } from "../controllers/user.controller";
import { Router } from "express";

const userRoutes: Router = Router();

userRoutes.post("/create", createUser);
userRoutes.get("/get-user/:userId", getUser);
userRoutes.put("/update", updateUser);
userRoutes.post("/delete", deleteUser);

export default userRoutes;