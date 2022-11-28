import { Component, OnInit } from '@angular/core';

import { PagerService } from './services/pager.service';
import { users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  constructor(private pagerService: PagerService) { }


  private allItems: any[] =[];

  searchItem: string = '';
  foundSearchItems:any = [];

  pager: any = {};
  pagedItems: any[] =[];

  ngOnInit() {
        this.allItems = users;
        this.setPage(1);

  }

  onSearchChange(){
    this.foundSearchItems = [];
    this.setPage(1);
    if(this.searchItem == ''){
      return;
    }
    this.allItems.forEach((el)=>{
      if(el.name.includes(this.searchItem)){
        this.foundSearchItems.push(el);
      }
    })
  }

  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
