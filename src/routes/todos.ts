import {Router}  from "express"
import { createTodo, deleteTodo, getToDos, updateTodo } from './../controller/todos';

const router = Router () ;
router.post("/" , createTodo)

router.get('/' , getToDos);

router.patch('/:id' , updateTodo);

router.delete('/:id', deleteTodo);

export default router;