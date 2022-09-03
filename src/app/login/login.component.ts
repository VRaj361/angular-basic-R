import { UserService } from './../service/user.service';
import { Router } from '@angular/router';
import { ToastRef, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string="";
  author:string="";
  is_check:boolean=false;
  users: Array<any> = []
  constructor(private userservice:UserService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    let user = {"author":this.author,"firstName":this.name};
    console.log(user)
    this.userservice.getAllBooks().subscribe(res=>{

      this.users = res;
      this.users.map((e)=>{
        console.log(e)
        if(this.author === e.author && this.name === e.name){
          this.toastr.success("Login Successfully");
          this.router.navigateByUrl("/listuser")
          this.is_check=true;
        }
      })
      if(this.is_check === false){
        this.toastr.error("Invalid Credentials");
      }

    },err=>{
      console.log(err);
    });


  }

}
