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


  deleteItem(event:{isdeleted:boolean}, i:number) {
    if (event.isdeleted) {
      this.numberArr.splice(i, 1)
    }
  }

}
