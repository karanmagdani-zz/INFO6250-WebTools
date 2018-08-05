import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo/todo.service';
import { Location } from '@angular/common';
import { Task } from '../Task/task.data';
import { TaskService } from '../Task/task.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  task: Task;
  taskName: string;
  taskDescription: string;
  status: number;
  assignedTo: string;


  constructor(
    private todoService: TodoService,
    private taskService: TaskService,
    private location: Location
  ) {
    this.task = new Task();
   }

  setName(event: any) {
    this.taskName = event.target.value;
  }

  setDescription(event: any) {
    this.taskDescription = event.target.value;
  }

  setStatus(event: any) {
    this.status = event.target.value;
  }

  setAssignment(event: any) {
    this.assignedTo = event.target.value;
  }

  create() {
    this.task.Name = this.taskName;
    this.task.Description = this.taskDescription;
    this.task.Status = this.status;
    this.task.AssignedTo = this.assignedTo;
    this.task.Date = Date.now();
    this.taskService.addTask(this.task).subscribe(res => {
      console.log('Task added');
      this.location.back(); });
  }

  ngOnInit() {
  }

}
