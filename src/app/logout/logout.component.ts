import { UserDataService } from './../service/user-data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private toastr:ToastrService,private router:Router,private userData:UserDataService) { }

  ngOnInit(): void {
    this.userData.authtoken="";
    this.toastr.success("Logout Successfully")
    this.router.navigateByUrl("/login")
  }

}
