import { createAction, props } from "@ngrx/store";

export const addTodo = createAction(
    '[ToDo] Add Todo',
    props<{ text: string }>()
);

export const toggle = createAction(
    '[ToDo] Toggle Todo',
    props<{ id: number }>()
);
    
export const edit = createAction(
    '[ToDo] Edit Todo',
    props<{ id: number , text: string }>()
);

export const deleteTodo = createAction(
    '[ToDo] Delete Todo',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[ToDo] Toggle All',
    props<{ completed: boolean }>()
);

export const clearCompleted = createAction(
    '[ToDo] Clear Completed'
);