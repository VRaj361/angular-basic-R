import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name = "Vraj"
  author: string = ""// string typecast
  firstName: string = ""
  category: string = ""
  price: string=""

  constructor(private sessionService:SessionService,private toastr:ToastrService,private router:Router) { }
  //dependency inject in component class using constructor

  ngOnInit(): void {}
    signup() {
      console.log(this.firstName);
      console.log(this.author);
      console.log(this.category);
      console.log(this.price);
      const user={"author":this.author,"name":this.firstName,"category":this.category,"price":this.price};
      this.sessionService.signupApi(user).subscribe(response=>{
        this.toastr.success("Book Added");
        this.router.navigateByUrl("/listuser");
      },error=>{
        console.log(error);
      })
    }


}
