import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  public todo: Todo[];
  public formTodo: FormGroup; // formulaire pour todo
  private router: Router

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService) { }

  //groupe c'est un objet, dans notre formulaire on veux remplir un name et une description
  ngOnInit() {
    this.formTodo = this.fb.group({
      name: ["", Validators.required], // 2eme element de tableau c'est le terme validation, on veut qu'il soit requis
      description: ["", Validators.required]
    });
    console.log(this.formTodo);
  }



  save() {
    console.log(this.formTodo.valid);
    console.log(this.formTodo.get("name").valid);
    console.log(this.formTodo.get("description").valid);

    if (this.formTodo.valid) {
      this.router.navigate(['/todos']);

      let todo = new Todo;
      todo.name = this.formTodo.get("name").value;
      todo.description = this.formTodo.get("description").value;

      this.todoService.post(todo)
    }
  }









}
