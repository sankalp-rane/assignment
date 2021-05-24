import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  filterStatus = '';

  public userName = sessionStorage.getItem('username');

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
  }

  public onChange = () => {
    console.log(this.filterStatus);
    this.dataService.setMessage(this.filterStatus);
  }
}
