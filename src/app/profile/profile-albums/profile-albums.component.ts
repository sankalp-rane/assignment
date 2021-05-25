import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../models/album.model';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-profile-albums',
  templateUrl: './profile-albums.component.html',
  styleUrls: ['./profile-albums.component.scss']
})
export class ProfileAlbumsComponent implements OnInit {

  @Input() id: number = -1;

  albumList: Album[] = [];

  constructor(
    private login: LoginService,
  ) { }

  ngOnInit(): void {
    this.getUserAlbums();
  }

  public getUserAlbums = () => {
    this.login.getUserPosts().subscribe(
      (data: any) => {
        let temp: Album[];
        temp = data.body;
        temp.forEach(album => {
          if (album.userId == this.id) {
            this.albumList.push(album);
          };
        })
        // console.log(this.albumList);
      }
    );
  }
}
