import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Task } from './task.data';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Access-Control-Allow-Origin' : '*' })
};

@Injectable()
export class TaskService {

//     private getUrl: string = "http://localhost:5000/api/getplayers";
    private postUrl = 'http://localhost:5000/api/todo/create';
    private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'  }) };


  constructor(private http: HttpClient) { }

    addTask(task: Task): Observable<any> {
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        // const headers = new Headers({ 'Content-Type': 'application/json' })
        console.log(task);
        return this.http.post(this.postUrl, task, this._options);

    }

    // putStudent(stud: Player): Observable<Response>
  //   {
  //     var res: Observable<Response>;
  //     res = this.http.post(this.postUrl, stud); //, opts);
  //     return res;
  // }

    //  createItem(todoItem: any): Observable<any> {
    // return this.http.post(this.serverLink, todoItem, httpOptions);
  // }


}





// import { Player } from './Player.data';

// @Injectable()
// export class PlayerServiceProvider {

//     private getUrl: string = "http://localhost:5000/api/getplayers";
//     private postUrl: string = "http://localhost:5000/api/registerplayer";

//     private currentPlayer: Player;

//     constructor(private http: Http) {
//         this.currentPlayer = new Player();
//      }

//     getStudents(): Observable<Player[]>
//     {
//         var resps: Observable<Response>;
//         resps = this.http.get(this.getUrl);
//         var studs: Observable<Player[]>
//         studs = resps.map<Response,
//             Player[]>(resp => resp.json());
//         return studs
//     }

//     putStudent(stud: Player): Observable<Response>
//     {
//         var res: Observable<Response>;
//         res = this.http.post(this.postUrl, stud); //, opts);
//         return res;
//     }

//     killPlayer(pl : Player): Observable<Response>
//     {
//         var killUrl = "http://localhost:5000/api/killplayer/";
//         killUrl = killUrl + pl.Name;
//         var res: Observable<Response>;
//         res= this.http.put(killUrl, pl.Name);

//         return res;
//     }

//     VoteOut(pl: Player, me: Player): Observable<Response>
//     {
//         var voteUrl = "http://localhost:5000/api/voteplayer/";
//         voteUrl = voteUrl + me.Name + "/" + pl.Name ;
//         var res: Observable<Response>;
//         res= this.http.post(voteUrl, pl.Name);

//         return res;
//     }

//     checkRole(pl: Player): Observable<Response>
//     {
//         var roleUrl = "http://localhost:5000/api/checkrole/";
//         roleUrl = roleUrl + pl.Name;
//         var res: Observable<Response>;
//         res= this.http.request(roleUrl, pl.Name);

//         return res;
//     }

//     DeleteAllPlayers(): Observable<Response>
//     {
//         var deleteUrl = "http://localhost:5000/api/removeall/"
//         var res: Observable<Response>;
//         res= this.http.delete(deleteUrl);
//         return res;
//     }


//     AssignCurrentPlayer(p : Player): void
//     {
//         this.currentPlayer = p;
//     }

//     GetAssignedPlayer(): Player
//     {
//         return this.currentPlayer;
//     }
// }
