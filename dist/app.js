"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var todos_1 = __importDefault(require("./routes/todos"));
var body_parser_1 = require("body-parser");
//only in type script 
var app = express_1.default();
app.use(body_parser_1.json());
app.use("/todos", todos_1.default);
app.use(function (err, req, res, next) {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
//# sourceMappingURL=app.js.map