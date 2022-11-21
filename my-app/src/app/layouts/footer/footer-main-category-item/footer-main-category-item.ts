import {Component, Input} from "@angular/core";

@Component({
  selector:"app-footer-main-category",
  templateUrl:"footer-main-category-item.html",
  styleUrls:["footer-main-category-item.css"]
})

export class FooterMainCategoryItem{
  @Input()
  public item:string = '';

  constructor() {

  }

}
