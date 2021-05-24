import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
  ]
})
export class ProfileModule { }
