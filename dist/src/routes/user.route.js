"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("../controllers/user.controller");
var express_1 = require("express");
var userRoutes = (0, express_1.Router)();
userRoutes.post("/create", user_controller_1.createUser);
userRoutes.delete("/delete", user_controller_1.deleteUser);
exports.default = userRoutes;
