import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Post } from '../../models/post.model';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.scss']
})
export class ProfilePostsComponent implements OnInit {
  
  @Input() id: number = -1;

  postList: Post[] = [];

  constructor(
    private login: LoginService,
  ) { }

  ngOnInit(): void {
    this.getUserPosts();
  }

  
  public getUserPosts = () => {
    this.login.getUserPosts().subscribe(
      (data: any) => {
        let temp: Post[];
        temp = data.body;
        temp.forEach(post => {
          // console.log(this.id);
          if (post.userId == this.id) {
            this.postList.push(post);
          };
        })
        // console.log(this.postList);
      }
    );
  }

}
