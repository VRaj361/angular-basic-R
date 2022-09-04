import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userid="";
  authtoken="";
  name="";
  constructor() { }
}
