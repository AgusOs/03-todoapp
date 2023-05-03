import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { addTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  txtInput: FormControl;

  constructor( private store:Store<AppState> ) {

    this.txtInput = new FormControl('', Validators.required);
  }

  add() {

    if ( this.txtInput.invalid ) {
      return console.error('Invalid task. Please add a valid Todo');
    };

    this.store.dispatch( addTodo({ text: this.txtInput.value }) );

    this.txtInput.reset();
  }

}
