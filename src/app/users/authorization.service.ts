import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private loggedIn = false;

  public logIn() {
    this.loggedIn = true;
  }

  public logOut() {
    this.loggedIn = false;
  }

  public isLoggedIn(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 0);
    });
  }
}
