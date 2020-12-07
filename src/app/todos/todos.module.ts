import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TodosComponent } from './todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodolisComponent } from './todolis/todolis.component';

import { TododetailComponent } from './tododetail/tododetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TodosComponent,
    TodolisComponent,
    TododetailComponent,
  TodoListComponent,
   TodoComponent,
 
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
ReactiveFormsModule,
FormsModule,
IonicModule

    
  
  
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
