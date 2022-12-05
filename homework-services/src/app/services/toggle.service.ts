import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class ToggleService {
  isVisible = true;

  constructor() {
  }

  setIsVisible(isVisible:boolean){
    this.isVisible = isVisible;
  }

  getIsVisible(){
    return this.isVisible;
  }

}

