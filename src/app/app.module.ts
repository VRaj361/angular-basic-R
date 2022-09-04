import { EditBookComponent } from './edit-book/edit-book.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { ListusersComponent } from './listusers/listusers.component';
import { SidebarComponent } from './user/sidebar/sidebar.component';
import { HeaderComponent } from './user/header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { PipelineComponent } from './user/pipeline/pipeline.component';
import { UsdToInrPipe } from './usd-to-inr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NotfoundComponent,
    ListusersComponent,
    EditBookComponent,
    SidebarComponent,
    HeaderComponent,
    LogoutComponent,
    UserLayoutComponent,
    PipelineComponent,
    UsdToInrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
