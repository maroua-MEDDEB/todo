import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from './todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todoList: Todo[]
  // c'est par le httpclient qu'on fait les requetes
  constructor(private http: HttpClient) { }

  // get , on la type un observable qui possède subscribe
  //on specifie le  type de donnée que renvoie l'observable dans le subscribe<>
   get(): Observable<Todo[]> {
    const options = {
      headers: new HttpHeaders({
        "secret-key": environment.jsonbin.key
      })
    };
    const url = environment.jsonbin.url
    return this.http.get<Todo[]>(url, options);
  }

  
  post(todo: Todo) {
    const myTable = [];
    this.todoList.forEach(item => {
      myTable.push(item);
    });
    myTable.push(todo);

    this.put(this.todoList).subscribe(
      () => myTable.push(todo),
      () => { }

    );
  }



//delete soit au courant qu'il y a un success ou error
delete(todo: Todo){


  
this.put(this.todoList).subscribe(
  () => {
    const index= this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);   
  },
  () => {}
)
}


// delete: dès le départ j'enlève de la liste après je fais put(update)
  // delete(todo: Todo) {
  //   const myTab = [];
  //   this.todoList.forEach(item => {
  //     if (item != todo) {
  //       myTab.push(item);
  //     }
  //   })
  //   this.put(myTab).subscribe(
  //     () => {
  //       const index = this.todoList.indexOf(todo);
  //       this.todoList.splice(index, 1);
  //       this.put(this.todoList);
  //     },
  //     () => { }
  //   );
  // }




//leproblème: je ne sais pas reagir en cas de success, parce que put ne renvoie rien d'interessant
 // solution: put renvoie un observable comme ça je peux souscrire
put(todoList: Todo[]): Observable<Todo[]> {
    const options = {
      headers: new HttpHeaders({
        "secret-key": environment.jsonbin.key,
        "Content-Type": "application/json",
        "versionning": "false"
      })
    };

    const url = environment.jsonbin.url
    return this.http.put<Todo[]>(url, options);
  }

}



