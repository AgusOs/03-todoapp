import { createReducer, on } from '@ngrx/store';
import { addTodo } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState:Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Reunir las gemas del infinito'),
];

export const todoReducer = createReducer(initialState,
    on(addTodo, (state, {text}) => [...state, new Todo(text)]),
);