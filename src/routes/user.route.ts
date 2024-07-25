import { createUser, deleteUser, getUser, updateUser } from "../controllers/user.controller";
import { Router } from "express";

const userRoutes: Router = Router();

userRoutes.post("/create", createUser);
userRoutes.get("/get-user", getUser);
userRoutes.put("/update", updateUser);
userRoutes.delete("/delete", deleteUser);

export default userRoutes;