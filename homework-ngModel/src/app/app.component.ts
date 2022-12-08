import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()
  element:string = '';

  changeValue(event:any){
    this.element = event;
  }

}
