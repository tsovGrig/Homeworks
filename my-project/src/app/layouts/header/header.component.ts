import {Component} from '@angular/core';


@Component({
  selector:"app-header",
  templateUrl:"./header.component.html",
  styleUrls:[]

})

export class HeaderComponent{
  readonly  title:string = 'Website Title';
  description:string = 'Website description.'
}
