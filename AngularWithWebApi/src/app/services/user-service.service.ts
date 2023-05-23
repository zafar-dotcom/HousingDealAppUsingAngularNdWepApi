import { Injectable } from '@angular/core';
import { Iuser } from '../Model/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }


  AddUser(user: Iuser) {
    let localStorageData = localStorage.getItem('users');
    let userArray: Iuser[] = localStorageData ? JSON.parse(localStorageData) : [];

    userArray.push(user);

    localStorage.setItem('users', JSON.stringify(userArray));
  }
}
