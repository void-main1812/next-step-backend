"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_route_1 = __importDefault(require("./user.route"));
var bookmark_route_1 = __importDefault(require("./bookmark.route"));
var rootRouter = (0, express_1.Router)();
rootRouter.use("/user", user_route_1.default);
rootRouter.use("/bookmark", bookmark_route_1.default);
exports.default = rootRouter;
