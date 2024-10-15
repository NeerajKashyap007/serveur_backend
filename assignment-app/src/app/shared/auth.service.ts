import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  authenticationData = [
    {
      login: 'user1',
      password: 'user1',
      role: 'user'
    },
    {
      login: 'user2',
      password: 'user2',
      role: 'admin'
    },
  ]

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  isAdmin() {
    return new Promise<boolean>((resolve, reject) => {
      resolve(this.loggedIn);
    });
  }

  constructor() { }
}
