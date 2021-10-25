import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registerUser(data:user){
    return this.http.post(`${environment.api}/user/register`,data)
  }

  loginUser(data:user){
    return this.http.post(`${environment.api}/user/login`,data)
  }
  
}
