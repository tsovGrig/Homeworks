import {Component, OnInit} from '@angular/core';
import {ToggleService} from "../../services/toggle.service";
import {SettingService} from "../../services/setting.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{
  isSelected = 0;

  constructor(
    public toggleService: ToggleService,
    public settingService: SettingService,
    ) {
  }

  ngOnInit(){
  }

  selectActive(i:number){
    this.isSelected = i;
  }


}
