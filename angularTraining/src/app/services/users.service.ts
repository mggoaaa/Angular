import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {User} from '../interfaces/users.interface'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private api = 'https://jsonplaceholder.typicode.com';
  constructor(private http:HttpClient) { }
  getAllUsers(){
    const path = `${this.api}/users/`;
    return this.http.get<User[]>(path);
  }
}
