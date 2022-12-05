import {Component} from '@angular/core';
import {ToggleService} from "../../services/toggle.service";
import {SettingService} from "../../services/setting.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  contentItems: string[] = ['ToDos', 'Settings'];
  isSelected: number = 1;
  name: string = '';
  url: string = '';
  updateHappening:boolean =false;

  constructor(public toggleService: ToggleService, public settingService: SettingService) {
  }

  selectedContent(i: number) {
    this.isSelected = i;
  }

  changeSettingState(i: number) {
    this.settingService.updateSetting(i);
  }

  updateSettingsItem(i: number, name: string, url: string) {
    if (name !== this.settingService.getAllSettingItems()[i].name || url !== this.settingService.getAllSettingItems()[i].url) {
      this.updateHappening = true;
      console.log( this.updateHappening = true);
    }
  }

}
