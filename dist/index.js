"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
var client_1 = require("@prisma/client");
var express_1 = __importDefault(require("express"));
var secrets_1 = require("./secrets");
var index_route_1 = __importDefault(require("./routes/index.route"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/api', index_route_1.default);
exports.prismaClient = new client_1.PrismaClient({
    log: ["query"],
});
app.listen(secrets_1.PORT, function () {
    console.log("Server is running on port ".concat(secrets_1.PORT));
});
