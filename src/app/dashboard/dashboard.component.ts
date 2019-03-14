import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from '../login/user.service';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public workspaces: any = [];
  public datas: any = [];
  public httpOptions : any; 
 
  constructor(private http: HttpClient, private _userService: UserService) {
     this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'JWT ' + this._userService.token
        })
      };
    
  }
   
   ngOnInit() {
      
      this.http.get('http://127.0.0.1:8000/rest/workspace/read_access',  this.httpOptions)
      .subscribe(
        data => {
          console.log(data);
          this.workspaces=data;
        }
      );
  }
  
  onDisplayData(w) {
    
    this.http.get('http://127.0.0.1:8000/mdcs/data/'+w.id, this.httpOptions)
    .subscribe(
      data => {
        console.log(data);
        this.datas=data;
      }
    );
  }
  
}
