import {Component} from "@angular/core";


@Component({
  selector:"app-content",
  templateUrl: "./content.component.html",
  styleUrls:["./content.component.css"],
})

export class ContentComponent{
   users = ['meri', 'artur', 'hovhannes', 'syuzi']
   colors:string[] = ['red', 'green', 'blue','yellow', 'orange'];
   newColors:string[] = [];
   selectedColor:string = '';
   selectedUser = '';
  constructor(){

  }

  changeColor(event:any, user:string){
    if(this.colors.length ===  this.newColors.length){
      this.newColors = [];
    }
    let index =  Math.floor(Math.random() * this.colors.length);
    while(this.newColors.includes(this.colors[index])){
      index =  Math.floor(Math.random() * this.colors.length);
    }
    let value = this.colors[index];
    this.newColors.push(value);
    this.selectedColor = value;
    this.selectedUser = user;
  }

  deleteUser(index:number){
    if(index === 0){
      return  this.users.splice(index,1);
    }
    return this.users.splice(index,index);
  }
}
