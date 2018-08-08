import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Logger } from 'angular2-logger/core';
import { FormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';


import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './components/partials/header/header.component';
import { ChartsModule } from 'ng2-charts';

import { TodoService } from './services/todo/todo.service';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TaskService } from './components/Task/task.service';
import { HttpModule } from '../../node_modules/@angular/http';
import { GraphsComponent } from './components/graphs/graphs.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './shared/auth/auth.guard.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HeaderComponent,
    TodoItemComponent,
    TodoAddComponent,
    GraphsComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ChartsModule,
    FormsModule,
    OAuthModule.forRoot()
  ],
  providers: [TodoService,
  TaskService,
  Logger,
  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
