import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  
  @Input() todo!: Todo;
  @ViewChild('inputElement') txtInputElement!: ElementRef;

  chkCompleted!: FormControl;
  txtInput!: FormControl;

  editing: boolean = false;

  constructor( private store: Store<AppState> ) {}
  
  ngOnInit(): void {
    
    // this.todo.completed = true; En esta version de NgRx toma esta propiedad como mutacion del store y da error

    this.chkCompleted = new FormControl( this.todo.completed );
    this.txtInput = new FormControl( this.todo.text, Validators.required );

    this.chkCompleted.valueChanges.subscribe( value => {
      this.store.dispatch( actions.toggle({ id: this.todo.id }) );

    });

  }

  edit() {

    this.editing = true;

    setTimeout(() => {
      this.txtInputElement.nativeElement.select();
    },1);

  }

  finishEdit() {
    this.editing = false;
  }

}