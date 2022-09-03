import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  constructor(private userService:UserService,private toastr:ToastrService) { }
  users: Array<any> = []
  ngOnInit(): void {
    this.userService.getAllBooks().subscribe(response=>{
      this.users=response;
    })
  }

  deleteBook(bookId:any){
    this.userService.deleteParticularBook(bookId).subscribe(res=>{
      this.toastr.success("Book Delete Successfully")
    },err=>{
      this.toastr.error("Something went wrong")
    })
    this.users=this.users.filter(e=>e.bookId!=bookId);
  }

  

}
