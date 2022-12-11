import {Injectable} from "@angular/core";
import {Pages} from "../types/page.type";

@Injectable()
export class PagesService{
  activePage:Pages = Pages.CONFIRMATION;

  changeActivePage(page:Pages){
    this.activePage = page;
  }

}
