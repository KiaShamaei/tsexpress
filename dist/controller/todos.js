"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getToDos = exports.createTodo = void 0;
var todos_1 = require("../models/todos");
var TODOS = [];
var createTodo = function (req, res, next) {
    var text = req.body.text;
    var newTodo = new todos_1.Todos(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(200).json({ message: 'Created the todo.', createdTodo: newTodo });
};
exports.createTodo = createTodo;
var getToDos = function (req, res) {
    res.status(200).json({ message: "our list ", TODOS: TODOS });
};
exports.getToDos = getToDos;
var updateTodo = function (req, res, next) {
    var todoId = req.params.id;
    var updatedText = req.body.text;
    var todoIndex = TODOS.findIndex(function (todo) { return todo.id === todoId; });
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    TODOS[todoIndex] = new todos_1.Todos(todoId, updatedText);
    res.json({ message: "Updated", text: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
var deleteTodo = function (req, res) {
    var Id = req.params.id;
    var todoIndex = TODOS.findIndex(function (x) { return x.id === Id; });
    if (todoIndex < 0) {
        throw new Error('There isnt any todo');
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: "delete done!" });
};
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=todos.js.map