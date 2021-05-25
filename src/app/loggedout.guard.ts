import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedoutGuard implements CanActivate {

  constructor(
    private route: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (sessionStorage.getItem('id') && sessionStorage.getItem('username')) {
      this.route.navigate(['/home'], { queryParams: { returnUrl: state.url }});
      return false;
    }
    return true;
  }
  
}
