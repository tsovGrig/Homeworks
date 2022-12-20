import {Component} from '@angular/core';
import {LanguagesService} from "../../services/languages.service";
import {UserService} from "../../services/user.service";
import {FormGroup, FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {ComparePassword} from "../../validators/passwordValidator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl(''),
  })


  constructor(
    public languagesService: LanguagesService,
    public userService: UserService,
    private fb: FormBuilder,
  ) {
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    }, {validator: [ComparePassword.MatchValidator('password', 'confirm_password')]})
  }

  saveRegistrationData() {
    if (this.profileForm.valid) {
      this.userService.saveUserData(this.profileForm.value as FormGroup);
    }
  }

  getControllState(n:string){
    return this.profileForm.get(n)?.valid;
  }

}
