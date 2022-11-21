import {Component} from "@angular/core";

interface Category{
  name:string,
  href:string
}

@Component({
  selector:"app-footer",
  templateUrl:"footer.component.html",
  styleUrls:["footer.component.css"]
})

export class FooterComponent{
  public mainCategories = ['SALES', 'COLLECTIONS', 'BRITVOLOGY', 'GIFT IDEAS', 'BRANDS'];
  public aboutUsCategory:Category[] = [{name:'Cooperation', href:''}, {name:'News', href:''}, {name:'Invoices', href:''}, {name:'Contacts', href:''}, {name:'Adresses', href:''}];
  public informationCategory:Category[] = [{name:'Loyality Program', href:''}, {name:'Delivery', href:''},{name:'Payment', href:''},{name:'Change and ChargeBack', href:''}, {name:'Where to buy', href:''}, {name:'Public afert', href:''}];
  public catalogCategory:Category[] = [{name:'Accessories', href:''}, {name:'Cosmetics', href:''}, {name:'Care', href:''}, {name:'Hair Care', href:''}, {name:'Bady Care', href:''}];
}
