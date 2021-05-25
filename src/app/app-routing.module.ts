import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoggedinGuard } from './loggedin.guard';
import { LoggedoutGuard } from './loggedout.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [LoggedoutGuard]},
  { path: 'home', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) , canActivate: [LoggedinGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
