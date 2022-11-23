import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core";


@Component({
  selector:"app-timer-item",
  templateUrl:"timerItem.component.html",
  styleUrls:["timerItem.component.css"]
})

export class TimerItemComponent implements OnInit
{

  @Input()
  public timerNumber:number = 0;
  public convertedTime:string = "";
  @Output() deletedTimerInput = new EventEmitter<{isdeleted:boolean}>();



  deleteTimerItem(){
    this.deletedTimerInput.emit({isdeleted:true});
  }


  public time_convert(num:number)
  {
    num = Number(num);
    var h = Math.floor(num / 3600);
    var m = Math.floor(num % 3600 / 60);
    var s = Math.floor(num % 3600 % 60);
    return `${h} : ${m} : ${s}`;
  }


  ngOnInit(){
    this.convertedTime = this.time_convert(this.timerNumber);
    setInterval(() =>{
        this.timerNumber--;
        this.convertedTime= this.time_convert(this.timerNumber);
        if(this.timerNumber === 0){
          this.deletedTimerInput.emit({isdeleted:true});
        }
    }, 1000);

  }

}
