import {Component, Input} from "@angular/core";

@Component({
  selector:"app-footer-item",
  templateUrl:"footer.category-item.html",
  styleUrls:["footer.category-item.css"]

})

export class FooterCategoryItem{
  @Input('category')
  public item:string = '';
}
