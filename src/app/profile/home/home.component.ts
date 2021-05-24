import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { LoginService } from 'src/app/login.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userList: User[] = [];

  filteredString: string = '';

  constructor(
    private login: LoginService,
    private dataService: DataService,
    ) { }

  ngOnInit(): void {
    this.getUserData();
    this.getFilterString();
  }

  public getUserData = () => {
    this.login.getUsersList().subscribe(
      (data: any) => {
        let temp: User[];
        temp = data.body;
        temp.forEach(user => {
          if (user.username != sessionStorage.getItem('username'))
            this.userList.push(user);
        })
      }
    );
  }

  public getFilterString = () => {
    this.dataService.dataString.subscribe(
      (data) => {
        this.filteredString = data;
      }
    )
  }


}
