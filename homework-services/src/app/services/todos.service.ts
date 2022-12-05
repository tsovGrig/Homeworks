import {Injectable} from "@angular/core";
import {TodoesInterface} from "../interfaces/todoes.interface";

@Injectable({providedIn:"root"})

export class TodosService{
  toDoItems:TodoesInterface[] = [];

  addTodoesItem(item:TodoesInterface){
    this.toDoItems.push(item);
  }
}
