import { Component } from '@angular/core';
import {UserService} from './login/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nist';
  workspaces: any  = [];
  datas: any  = [];
  constructor() { }
}
