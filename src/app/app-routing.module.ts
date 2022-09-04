import { LoginCheckGuard } from './login-check.guard';
import { LogoutComponent } from './logout/logout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { EditBookComponent } from './edit-book/edit-book.component';

import { ListusersComponent } from './listusers/listusers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [

  { component: LoginComponent, path: "login" },
  { path: "signup", component: SignupComponent },
  { path: "", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  {
    path: "user", component: UserLayoutComponent, children:[
      { path: "listuser", component: ListusersComponent },
      { path: "editbook/:bookId", component: EditBookComponent },
    ],canActivate:[LoginCheckGuard]
  },
  { path: "**", component: NotfoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
