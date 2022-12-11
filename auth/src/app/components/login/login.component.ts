import { Component } from '@angular/core';
import {LanguagesService} from "../../services/languages.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string = '';
  password:string = '';

  constructor(
    public  languageService : LanguagesService,
    public userService:UserService
  ) {
  }

  login(){
    this.userService.login({username:this.username, password:this.password});
  }
}
