import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() setPage = new EventEmitter<string>();
  
  filterStatus = '';
  
  onProfilePage: boolean = false;

  public userName = sessionStorage.getItem('username');

  constructor(
    private route: Router,
    private dataService: DataService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.routeTo('Details');
    this.checkRoute();
  }

  public checkRoute = () => {
    this.router.params.subscribe(params => {
      if (params['id']) {
        this.onProfilePage = true;
        // console.log('yes');
      } else {
        this.onProfilePage = false;
        // console.log('no');
      }
    });
  }

  public onChange = () => {
    // console.log(this.filterStatus);
    this.dataService.setMessage(this.filterStatus);
  }

  public routeTo = (data: string) => {
    this.setPage.emit(data);
  }

  public logout = () => {
    console.log('cleared');
    sessionStorage.clear();
    this.route.navigate(['']);
  }
}
