import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  public dataString = new Subject<string>();

  public setMessage = (filterString: string) => {
    this.dataString.next(filterString);
  }
}
