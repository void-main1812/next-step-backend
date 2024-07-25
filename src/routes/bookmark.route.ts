import { Router } from "express";
import { createBookmark, deleteBookmark, getAllBookmark } from "../controllers/bookmark.controller";

const bookmarkRoutes: Router = Router();

bookmarkRoutes.post("/create", createBookmark);
bookmarkRoutes.delete("/delete", deleteBookmark);
bookmarkRoutes.get("/get-bookmarks/:userId", getAllBookmark);

export default bookmarkRoutes;
