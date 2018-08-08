import { Task } from './../../components/Task/task.data';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TodoService {



  constructor(private http: HttpClient) { }


  getList(): Observable<Task[]> {
    const getLink = 'http://localhost:5000/api/gettasks';
    return this.http.get<Task[]>(getLink);
  }

  getItem(id: number): Observable<Task> {
    const getLink = 'http://localhost:5000/api/gettask';
    return this.http.get<Task>(getLink + '/' + id);
  }

  updateItem(todoItem: Task): Observable<any> {
    const getLink = 'http://localhost:5000/api/updatetask';
    return this.http.put(getLink + '/' + todoItem.id, todoItem, httpOptions);
  }

  deleteItem(id: number): Observable<any> {
    const getLink = 'http://localhost:5000/api/deletetask';
    return this.http.delete(getLink + '/' + id, httpOptions);
  }
}
