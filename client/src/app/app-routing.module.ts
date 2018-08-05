import { GraphsComponent } from './components/graphs/graphs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';

const routes: Routes = [
  { path: 'todo-list', component: TodoListComponent },
  { path: 'todo-add', component: TodoAddComponent },
  { path: 'todo-item/:id', component: TodoItemComponent },
  { path: 'graphs', component: GraphsComponent},
  { path: '', redirectTo: '/todo-list', pathMatch: 'full' },

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
