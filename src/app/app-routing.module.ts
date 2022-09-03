import { EditBookComponent } from './edit-book/edit-book.component';

import { ListusersComponent } from './listusers/listusers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [

  { component: LoginComponent, path: "login" },
  { path: "signup", component:SignupComponent },
  {path:"",component:LoginComponent},
  {path:"listuser", component:ListusersComponent},
  {path:"editbook/:bookId",component:EditBookComponent},
  {path:"**",component:NotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
