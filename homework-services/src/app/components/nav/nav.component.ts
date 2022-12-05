import { Component } from '@angular/core';
import {ToggleService} from "../../services/toggle.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor( public toggleService: ToggleService) {

  }

  changeToggleStatus(){
    this.toggleService.setIsVisible(!this.toggleService.isVisible);
  }

}
