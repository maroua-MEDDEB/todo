import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { TododetailComponent } from './tododetail/tododetail.component';
import { TodolisComponent } from './todolis/todolis.component';
import { TodosComponent } from './todos.component';

const routes: Routes = [{
  path: "",
  component: TodosComponent,
  children: [
    {
      path: "",
      component: TodoListComponent
    },
    {
      path:"tododetail",
      component:TododetailComponent
    },
    {
      path:"todo",
      component:TodoComponent
    },
    {
      path:"todolis",
      component:TodolisComponent
  }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
