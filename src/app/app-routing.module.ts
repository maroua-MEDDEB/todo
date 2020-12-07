import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
   
    path: "todos",
    //recuperer le module qui dans todos au moment où l'url est détecté
    loadChildren: () => import("./todos/todos.module").then(module => module.TodosModule)
  },


   {
    path: "**",
    redirectTo: "todos"
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
