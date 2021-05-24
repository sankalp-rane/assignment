import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userList: User[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  public getUserData = () => {
    this.dataService.getUserData().subscribe(
      (data: User[]) => {
        let username = sessionStorage.getItem('username');
        let temp: User[];
        temp = data;
        temp.forEach(user => {
          if(user.username != username)
            this.userList.push(user);
        });
        console.log(this.userList);
      }
    );
  }



}
