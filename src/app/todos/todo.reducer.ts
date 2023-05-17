import { createReducer, on } from '@ngrx/store';
import { addTodo, toggle } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState:Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Reunir las gemas del infinito'),
    new Todo('Comprar pan calentito')
];

export const todoReducer = createReducer(initialState,
    on(addTodo, (state, { text }) => [...state, new Todo(text)]),
    on(toggle, (state, { id }) => {
        return state.map( todo => {

            if ( todo.id === id ) {
                // Se agrega un retorno para aplicar los cambios sobre un nuevo objeto y no mutar el todo que se pasa por referencia
                return { 
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo;
            }
        });
    }),
);