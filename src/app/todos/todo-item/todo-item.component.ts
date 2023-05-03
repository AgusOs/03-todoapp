import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  
  @Input() todo!: Todo;

  // chkCompleted!: FormControl;
  txtInput!: FormControl;

  constructor() {}

  ngOnInit(): void {

    this.todo.completed = true;

    // this.chkCompleted = new FormControl( this.todo.completed );
    this.txtInput = new FormControl( this.todo.text, Validators.required );

  }

}