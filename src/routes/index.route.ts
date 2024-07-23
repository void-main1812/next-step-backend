import { Router } from "express";
import userRoutes from "./user.route";
import bookmarkRoutes from "./bookmark.route";

const rootRouter: Router = Router();

rootRouter.use("/user", userRoutes);
rootRouter.use("/bookmark", bookmarkRoutes);

export default rootRouter;