"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todos_1 = require("./../controller/todos");
var router = express_1.Router();
router.post("/", todos_1.createTodo);
router.get('/', todos_1.getToDos);
router.patch('/:id', todos_1.updateTodo);
router.delete('/:id', todos_1.deleteTodo);
exports.default = router;
//# sourceMappingURL=todos.js.map