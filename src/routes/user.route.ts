import {
  createUser,
  deleteUser,
  deleteUserByClerk,
  getUser,
  updateUser,
} from "../controllers/user.controller";
import { Router } from "express";

const userRoutes: Router = Router();

userRoutes.post("/create", createUser);
userRoutes.get("/get-user/:userId", getUser);
userRoutes.put("/update", updateUser);
userRoutes.delete("/delete", deleteUser);
userRoutes.post("/delete-for-clerk", deleteUserByClerk);

export default userRoutes;
