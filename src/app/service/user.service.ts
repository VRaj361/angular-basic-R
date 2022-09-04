
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAllBooks():Observable<any>{
    return this.httpClient.get(environment.url+"/book")
  }

  deleteParticularBook(bookId:any):Observable<any>{
    return this.httpClient.delete(environment.url+"/book/"+bookId)
  }

  updateParticularBook(bookId:any,price:any):Observable<any>{

    return this.httpClient.put(environment.url+"/book/?bookId="+bookId+"&price="+price,{});
  }

  generateAuthToken():Observable<any>{
    return this.httpClient.get("http://localhost:9999/getanytoken",{responseType:"text"})
  }//for user api in login

  checkUserData(user:any):Observable<any>{
    return this.httpClient.post("http://localhost:9999/logincus",user);
  }
}
