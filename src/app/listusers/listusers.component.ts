import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  constructor(private userService:UserService) { }
  users: Array<any> = []
  ngOnInit(): void {
    this.userService.getAllBooks().subscribe(response=>{
      console.log(response);
      this.users=response;
    })
  }

}
