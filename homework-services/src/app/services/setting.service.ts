import {Injectable} from "@angular/core";
import {Settings} from "../interfaces/settings.interface";


@Injectable({providedIn:"root"})
export class SettingService {
  private settingItems:Settings[] = [
    {name:"Home", url:"/home",isActive:true},
    {name:"Dashboard", url:"/dashboard", isActive:true},
    {name:"Orders", url:"/orders", isActive:true},
    {name:"Products", url:"/products",  isActive:true},
    {name:"Customers",  url:"/customers",  isActive: false}
  ];

  public getAllSettingItems(){
    return this.settingItems;
  }

  public getAllActiveSettingItems(){
   return this.settingItems.filter((item)=>{
      return item.isActive;
    })
  }

  updateSetting(i:number){
    this.settingItems[i].isActive = !this.settingItems[i].isActive;
  }
}
