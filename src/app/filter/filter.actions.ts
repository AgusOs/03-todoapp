import { createAction, props } from "@ngrx/store";

export type validFilters = 'all' | 'completed' | 'pending';

export const setFilter = createAction(
    '[Filter] Set Filter',
    props<{ filter: validFilters }>()
    );

export function clearCompleted(): any {
  throw new Error('Function not implemented.');
}
