import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({//provide DI,singleton design pattern like spring
  providedIn: 'root',
})
export class SessionService {
  constructor(private httpClient: HttpClient) { }

  signupApi(user: any) {
    //accept the user and datatype will be any
    return this.httpClient.post('https://vrajapi.herokuapp.com/book', user)
  }
}
