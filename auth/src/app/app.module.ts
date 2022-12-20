import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FailedLoginComponent } from './components/failed-login/failed-login.component';
import {ConfirmationComponent} from "./components/confirmation/confirmation.component";
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {PagesService} from "./services/pages.service";
import {LanguagesService} from "./services/languages.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./services/user.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FailedLoginComponent,
   ConfirmationComponent,
   MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PagesService, LanguagesService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
