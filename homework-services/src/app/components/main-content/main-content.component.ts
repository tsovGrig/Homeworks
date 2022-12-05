import { Component } from '@angular/core';
import {ToggleService} from "../../services/toggle.service";
import {SettingService} from "../../services/setting.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  contentItems = ['ToDos', 'Settings'];
  isSelected = 1;

  constructor(public toggleService: ToggleService, public settingService:SettingService) {
  }

  selectedContent(i:number){
     this.isSelected = i;
  }

  changeSettingState(i:number){
    this.settingService.updateSetting(i);
  }

}
