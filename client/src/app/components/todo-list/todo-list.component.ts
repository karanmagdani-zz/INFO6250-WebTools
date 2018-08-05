import { Task } from './../Task/task.data';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoItems: Task [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.todoService.getList()
    .subscribe(todoItems => {
      this.todoItems = todoItems;
     });
  }

}
