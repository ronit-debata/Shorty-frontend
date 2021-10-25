import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url, user } from './model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SortURLService {

  UrlData:Array<url> = [];
  constructor(private http:HttpClient) { }

  saveURL(url:url){
    this.UrlData.push(url)
    return this.http.post(`${environment.api}/shorturl`,url)
  }
  getAllURL(){
    return this.http.get<Array<url>>(`${environment.api}/shorturl`)
  }
  updateUrlById(urldata:url,urlId:any){
    return this.http.put(`${environment.api}/shorturl/${urlId}`,urldata)
  }
  deleteUserById(id:any){
    return this.http.delete(`${environment.api}/shorturl/${id}`)
  }

}
