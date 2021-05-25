import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    
  currentPage: string = 'Details';

  userList: User[] = [];

  id: number = -1;

  constructor(
    private login: LoginService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
      this.getUserData();
      this.route.params.subscribe(params => {
        // console.log(params);
        this.id = +params['id'];
      });
  }

  public displayPage = (event: string) => {
    this.currentPage = event;
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

}
