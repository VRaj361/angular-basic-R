import { UserDataService } from './../service/user-data.service';
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
  authtoken:string="";
  users: Array<any> = []
  constructor(private userservice:UserService,private toastr:ToastrService,private router:Router,private userData:UserDataService) { }

  ngOnInit(): void {
    this.userservice.generateAuthToken().subscribe(res=>{
      this.authtoken=res
    })
  }
  //for the user api of react project
  login(){

    let user={"email":this.name,"password":this.author,"authtoken":this.authtoken};
    console.log(user)
    this.userservice.checkUserData(user).subscribe(e=>{
      console.log(e)

        if(e.data !== null && e.status === 200){
          this.toastr.success(e.msg)
          this.userData.authtoken=e.data.authotoken;
          this.userData.name=e.data.firstname+e.data.lastname;
          this.userData.userid=e.data.userid;
          this.router.navigateByUrl("/user/listuser")
        }else if(e.status === 404){
          this.toastr.error(e.msg)
        }else{
          this.toastr.error(e.msg)
        }

    })
  }

  // login(){
  //   let user = {"author":this.author,"firstName":this.name};
  //   this.userservice.getAllBooks().subscribe(res=>{

  //     this.users = res;
  //     this.users.map((e)=>{
  //       if(this.author === e.author && this.name === e.name){
  //         this.toastr.success("Login Successfully");
  //         this.router.navigateByUrl("/listuser")
  //         this.is_check=true;
  //       }
  //     })
  //     if(this.is_check === false){
  //       this.toastr.error("Invalid Credentials");
  //     }

  //   },err=>{
  //     console.log(err);
  //   });
  // }

}
