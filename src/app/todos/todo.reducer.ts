import { createReducer, on } from '@ngrx/store';
import { addTodo } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState:Todo[] = [];

export const todoReducer = createReducer(initialState,
    on(addTodo, (state, {text}) => [...state, new Todo(text)]),
);