import { UserDataService } from './service/user-data.service';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckGuard implements CanActivate {

  constructor(private userData: UserDataService, private router: Router, private toastr: ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.userData.authtoken===null || this.userData.authtoken === ""){
      this.toastr.error("Please Login First")
      this.router.navigateByUrl("/login")
      return false;
    }else{
      console.log("call login guard")
      return true;
    }

    return true;
  }

}
