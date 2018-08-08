import { HomeComponent } from './components/home/home.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { AuthGuard } from './shared';

const routes: Routes = [
  { path: 'todo-list', component: TodoListComponent, canActivate: [AuthGuard] },
  { path: 'todo-add', component: TodoAddComponent, canActivate: [AuthGuard] },
  { path: 'todo-item/:id', component: TodoItemComponent, canActivate: [AuthGuard] },
  { path: 'graphs', component: GraphsComponent, canActivate: [AuthGuard]},
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponent }

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
