import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileComponent } from './profile.component';
import { ProfileAlbumsComponent } from './profile-albums/profile-albums.component';
import { ProfilePostsComponent } from './profile-posts/profile-posts.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FilterPipe,
    ProfileDetailsComponent,
    ProfileComponent,
    ProfileAlbumsComponent,
    ProfilePostsComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
  ]
})
export class ProfileModule { }
