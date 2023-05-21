import { Injectable } from '@angular/core';
import { Iuser } from '../Model/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  /**Adduser(user: Iuser) {
   
    //let userArray: any[] = [];
    //let localStorageData = localStorage.getItem('userss'); // Retrieve the JSON string

    //if (localStorageData !== null) {
    //  const emptyobj = localStorage.getItem('userss') || '{}'
    //  userArray = JSON.parse(emptyobj); // Parse the JSON string and assign it to the userArray variable
    //} else {
    //  userArray = [user];
    //}
    //localStorage.setItem('userss', JSON.stringify(userArray));


    


   
  } */

  AddUser(user: Iuser) {
    let localStorageData = localStorage.getItem('users');
    let userArray: Iuser[] = localStorageData ? JSON.parse(localStorageData) : [];

    userArray.push(user);

    localStorage.setItem('users', JSON.stringify(userArray));
  }

  
   

    //if (localStorage.getItem('users')) {
    //const storedData = localStorage.getItem('users');
    //  users = JSON.parse(storedData || '{}');
    //  users : [user, ...users]


    //}
    //else {
    //  users:[user]
    //}
    //localStorage.setItem('users', JSON.stringify(user));
  

 


}
