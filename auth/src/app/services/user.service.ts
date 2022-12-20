import{Injectable} from "@angular/core";
import {User, UserInput} from "../types/user.type";
import {AmErrors, EngErrors} from "../types/langauage.type";
import {LanguagesService} from "./languages.service";

@Injectable()

export class UserService{
  errors:any[] = [];

  userAdded:boolean = false;
  userExist:boolean = false;
  failedAttempts:number = 0;

  errorList = EngErrors;
  constructor(public languageService:LanguagesService) {
  }

  saveUserData ({username, password, confirm_password}:any){

      console.log('here');
      let usersData:any = localStorage.getItem('users');
      let users = JSON.parse(usersData);
      console.log(users);
      if(Array.isArray(users) && users.length > 0){
        console.log(users);
        users.push({username, password, confirm_password});
        localStorage.setItem('users',JSON.stringify(users));
      }else{
        localStorage.setItem('users',JSON.stringify([{username, password, confirm_password}]));
      }
      console.log(users);
      this.userAdded = true;
  }

  getErrors(){
    return Array.from(this.errors);
  }


  login({username, password}:User){
    this.errors = [];
    if(this.languageService.languageTitle === 'AM'){
      this.errorList = AmErrors;
    }else{
      this.errorList = EngErrors;
    }
      this.checkIfUserExists(username, password);
  }

  checkIfUserExists(username:string, password:string){
    let usersData:any = localStorage.getItem('users');
    let users = JSON.parse(usersData);
    if(Array.isArray(users) && users.length > 0){

     let user = users.filter(function(item) {
       return item.username === username && item.password===password;
      });

     if(user.length>0){
       this.userExist = true;
     }else{
       this.errors.push({ field:'password', error:this.errorList.WRONG_CREDENTIALS});
       this.failedAttempts +=1;
     }

    }else{
      this.errors.push({ field:'password', error:this.errorList.USER_DOES_NOT_EXIST});
    }
  }
}
