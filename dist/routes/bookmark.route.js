"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bookmark_controller_1 = require("../controllers/bookmark.controller");
var bookmarkRoutes = (0, express_1.Router)();
bookmarkRoutes.post("/create", bookmark_controller_1.createBookmark);
bookmarkRoutes.delete("/delete", bookmark_controller_1.deleteBookmark);
bookmarkRoutes.get("/get-bookmarks", bookmark_controller_1.getAllBookmark);
exports.default = bookmarkRoutes;
