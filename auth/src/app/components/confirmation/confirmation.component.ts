import { Component } from '@angular/core';
import {Pages} from "../../types/page.type";
import {PagesService} from "../../services/pages.service";
import {LanguagesService} from "../../services/languages.service";
import {AM, ENG} from "../../types/langauage.type";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  loginPage = Pages.LOGIN;
  registrationPage = Pages.REGISTRATION;
  confirmationPage = Pages.CONFIRMATION;
   constructor(
     public pageService: PagesService,
     public languagesService: LanguagesService
   ) {
   }

  confirmAccountExist(){
     this.pageService.changeActivePage(this.loginPage);
  }

  rejectAccountExist(){
    this.pageService.changeActivePage(this.registrationPage);
  }

  changeLanguage(language: any, languageTitle:string){
    this.languagesService.changeLanguage(language, languageTitle);
  }

}
