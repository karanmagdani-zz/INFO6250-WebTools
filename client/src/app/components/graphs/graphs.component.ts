import { Component, OnInit } from '@angular/core';
import { Task, Status } from '../Task/task.data';
import { TodoService } from '../../services/todo/todo.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  task: Task[];
  newStatus = 0;
  readyStatus = 0;
  needsInfoStatus = 0;
  inProgressStatus = 0;
  closedStatus = 0;
  public doughnutChartLabels: string[] = ['New', 'Ready for Test', 'Closed', 'Needs Info', 'In Progress'];
  public doughnutChartData: number[] = [1, 1, 1, 1, 1];
  public doughnutChartType = 'doughnut';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getList();
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  getList(): void {
    this.todoService.getList()
    .subscribe(todoItems => {
      this.task = todoItems;
      this.countStatus(this.task);
     });
  }

  countStatus(tasklist: Task[]) {
    for (const _task in tasklist) {
      if (tasklist[_task].status === 1) {
        this.newStatus++;
      } else if ( tasklist[_task].status === 2) {
        this.readyStatus++;
      } else if ( tasklist[_task].status === 3) {
        this.inProgressStatus++;
      } else if ( tasklist[_task].status === 4) {
        this.closedStatus++;
      } else if ( tasklist[_task].status === 5) {
        this.needsInfoStatus++;
      }
    }
    this.doughnutChartData = [this.newStatus, this.readyStatus, this.closedStatus, this.needsInfoStatus, this.inProgressStatus];
    this.createNewChart();
  }

  createNewChart() {

  }



}



// import { Component } from '@angular/core';

// @Component({
//   selector: 'doughnut-chart-demo',
//   templateUrl: './doughnut-chart-demo.html'
// })
// export class DoughnutChartDemoComponent {
//   // Doughnut
//   public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
//   public doughnutChartData:number[] = [350, 450, 100];
//   public doughnutChartType:string = 'doughnut';

//   // events
//   public chartClicked(e:any):void {
//     console.log(e);
//   }

//   public chartHovered(e:any):void {
//     console.log(e);
//   }
// }


