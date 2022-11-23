import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-output-lesson';
  public list:string[] = [];
  public inputValue:string = '';

  public onClickAdd():void{
    console.log(this.inputValue);
    this.list.push(this.inputValue);
  }

  onClickRemove(index:number){
     this.list.splice(index, 1);
  }
}
