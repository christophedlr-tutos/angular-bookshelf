import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HelpComponent } from './help/help.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import {AppRoutingModule} from "./app-routing-module";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HelpComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
