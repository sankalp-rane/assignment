import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from './models/user.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private subject = new Subject<User[]>();

  public sendMessage = (data: User[]) => {
    // console.log('data', data);
      this.subject.next(data);
  }

  public getUserData(): Observable<User[]> {
    return this.subject.asObservable();
}
}
