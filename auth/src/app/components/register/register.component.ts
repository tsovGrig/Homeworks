import { Component } from '@angular/core';
import {LanguagesService} from "../../services/languages.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username:string = '';
  password:string = '';
  confirm_password:string = '';

  constructor(
    public languagesService: LanguagesService,
    public userService: UserService
  ) {
  }

  saveRegistrationData(){
    this.userService.saveUserData({username:this.username, password:this.password, confirm_password:this.confirm_password})
  }

}
