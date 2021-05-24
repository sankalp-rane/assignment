import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public getUsersList = () => {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`, {observe: 'response'});
  }
  
}
