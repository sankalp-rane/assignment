import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private login: LoginService) { }

  userList: User[] = []
  isSubmitted: boolean = false;

  ngOnInit(): void {
    this.getUserListData();
  }

  public getUserListData = () => {
    this.login.getUsersList().subscribe(
      (data: any) => {
        this.userList = data.body;
        // console.log(this.userList);
      }
    );
  }
  
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })


  public onSubmit = () => {
    this.userList.forEach(user => {
        if (user.email === this.loginForm.value['email'] && this.loginForm.value['password'] === 'pass@123') {
          sessionStorage.setItem('id', (user.id).toString());
          console.log('success');
        }
    })
  }

}
