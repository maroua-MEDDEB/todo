import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  public todoList: Todo[];// de type de tableau qui vaut null
  public error: boolean;
  // dans constructeur on injecte le service
  constructor(private todoService: TodoService) {
    this.retry();
  }

  retry() {
    //c'est le composant qui veut savoir s'il y a un success et une erreur
    //donc on veut que le composant puisse appeler la methode get pour etre au courant qu'il y a un succes ou error

    // c'est le service qui a les methode get, post, put, delete
    this.todoService.get().subscribe(
      // subscribe, on attent en premier argumenet un cas de success et un 2ème argument un cas d'erreur
      // on repli le tableau  du composant todoList eli fih Todo et on rempli le service 
      (todoList: Todo[]) => {
        // on repli le tableau  du composant todoList eli fih Todo et on rempli le service 
        this.todoList = this.todoService.todoList = todoList
      },
      () => {
        // en cas d'erreur:
        // on crée un attribut erreur
        //affectuer un boolean
        this.error = true; //s'il vaut true alors on affiche
      }
    );
  }


  
  delete(todo: Todo) {
// delete: dès le départ j'enlève de la liste après je fais put(update)
    return this.todoService.delete(todo);
  }
}