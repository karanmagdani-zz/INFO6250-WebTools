import { Task } from './../Task/task.data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo/todo.service';
import { Location } from '@angular/common';

enum Status {
  'New' = 1,
  'Ready for test' = 2,
  'In Progress' = 3,
  'Closed' = 4,
  'Needs Info' = 5
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  task: Task;
  status: Status;
  taskName: string;
  taskDescription: string;
  statusUpdated: number;
  assignedTo: string;
  Status: typeof Status = Status;



  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTodoItem();
    let options = Object.keys(Status);
    options = options.slice(options.length / 2);
  }

  getTodoItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getItem(id)
      .subscribe(
        task => this.task = task
      );
  }

  makeDone(): void {
    // this.task.isComplete = true;
    this.todoService.updateItem(this.task)
      .subscribe(res => { console.log(res); });
  }

  ls(): void {
    this.task.Name = this.taskName;
    this.task.Description = this.taskDescription;
    this.task.Status = this.statusUpdated;
    this.task.AssignedTo = this.assignedTo;
    this.task.Date = Date.now();
    this.todoService.updateItem(this.task)
      .subscribe(res => { console.log(res);
      this.location.back(); });
  }

  delete(): void {
    this.todoService.deleteItem(this.task.id)
      .subscribe(res => { console.log(res); this.location.back(); });
  }

  setName(event: any) {
    this.taskName = event.target.value;
  }

  setDescription(event: any) {
    this.taskDescription = event.target.value;
  }

  setStatus(event: any) {
    this.statusUpdated = event.target.value;
    console.log('I am status' + this.statusUpdated);
  }

  setAssignment(event: any) {
    this.assignedTo = event.target.value;
  }
}


