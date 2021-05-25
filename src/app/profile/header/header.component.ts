import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() setPage = new EventEmitter<string>();
  
  filterStatus = '';

  public userName = sessionStorage.getItem('username');

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.routeTo('Details');
  }

  public onChange = () => {
    // console.log(this.filterStatus);
    this.dataService.setMessage(this.filterStatus);
  }

  public routeTo = (data: string) => {
    this.setPage.emit(data);
  }
}
