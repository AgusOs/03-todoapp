import { createAction, props } from "@ngrx/store";

export const addTodo = createAction(
    '[TODO] Add Todo',
    props<{ text: string }>()
    );

export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()
    );