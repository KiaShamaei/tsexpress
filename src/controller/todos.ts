
import { RequestHandler } from 'express';

import { Todos } from '../models/todos';
import { RequestHandler } from 'express';


const TODOS: Todos[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
	const text = (req.body as { text: string }).text;
	const newTodo = new Todos(Math.random().toString(), text);

	TODOS.push(newTodo);

	res.status(200).json({ message: 'Created the todo.', createdTodo: newTodo });
};

export const getToDos: RequestHandler = (req, res) => {
	res.status(200).json({ message: "our list ", TODOS })
}

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
	const todoId = req.params.id;

	const updatedText = (req.body as { text: string }).text;

	const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

	if (todoIndex < 0) {
		throw new Error('Could not find todo!');
	}
	TODOS[todoIndex] = new Todos(todoId , updatedText)
	res.json({message : "Updated" ,  text : TODOS[todoIndex]}) 
}

export const deleteTodo : RequestHandler <{id :  string} >= (req, res)=>{
	const Id = req.params.id ;
	const todoIndex = TODOS.findIndex(x=>x.id === Id)
	if (todoIndex < 0){
		throw new Error ('There isnt any todo')

	}
	TODOS.splice(todoIndex, 1)
	res.json({message :  "delete done!"})

}