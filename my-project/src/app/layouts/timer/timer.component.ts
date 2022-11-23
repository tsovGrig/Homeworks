import {Component, OnInit} from "@angular/core";


@Component({
  selector:"app-timer",
  templateUrl:"./timer.component.html",
  styleUrls:['./timer.component.css'],
})

export class TimerComponent{

  number:number = 0;
  convertedTime = '';
  convertedTimeArr:string[] = [];
  numberArr: number[] = [];


  public addTime(){
    this.numberArr.push(this.number);
  }

  public time_convert(num:number)
  {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}:${minutes}`;
  }

  deleteItem(event:{isdeleted:boolean}, i:number) {
    if (event.isdeleted) {
      this.numberArr.splice(i, 1)
    }
  }

}
