import {Component} from '@angular/core';
import {ToggleService} from "../../services/toggle.service";
import {SettingService} from "../../services/setting.service";
import {TodosService} from "../../services/todos.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  contentItems: string[] = ['ToDos', 'Settings'];
  isSelected: number = 0;
  name: string = '';
  url: string = '';
  updateHappening:boolean =false;
  title:string = '';
  description:string = '';

  constructor(
    public toggleService: ToggleService,
    public settingService: SettingService,
    public toDoService: TodosService
  ) {
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

  saveTodo(){
    this.toDoService.addTodoesItem({
      title: this.title,
      description:this.description
    });
    console.log(this.toDoService.toDoItems);
  }

}
