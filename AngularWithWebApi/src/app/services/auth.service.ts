import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  auth(user: any) {
    let localStorageData = localStorage.getItem('users');
    let userArray: any[] = localStorageData ? JSON.parse(localStorageData) : [];
    /*if user will found it will return it if not then it will return null or undefined*/
    return userArray.find(c => c.username === user.username && c.password === user.password)
  }
}
