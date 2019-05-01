import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../app/users/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  private isUserLoggedIn = false;

  constructor(private readonly authorization: AuthorizationService, private readonly router: Router) {
    this.authorization.isLoggedIn()
      .then((isLoggedIn: boolean) => {
        this.isUserLoggedIn = isLoggedIn;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isUserLoggedIn ? true : this.navigateTo404Page();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }

  private navigateTo404Page(): boolean {
    // noinspection JSIgnoredPromiseFromCall
    this.router.navigate(['404']);
    return false;
  }
}
