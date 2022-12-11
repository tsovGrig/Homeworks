import {Injectable} from "@angular/core";
import {ENG, AM} from "../types/langauage.type";

@Injectable()

export class LanguagesService{
    language = ENG;
    englishData = ENG;
    armenianData = AM;
    languageTitle = 'ENG';


    changeLanguage (language:any, languageTitle:string){
      this.language = language;
      this.languageTitle = languageTitle;
    }
}
