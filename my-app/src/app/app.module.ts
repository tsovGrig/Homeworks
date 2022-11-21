import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavComponent} from "./layouts/nav/nav.component";
import {FooterComponent} from "./layouts/footer/footer.component";
import {ReviewComponent} from "./layouts/review/review.component";
import {GalleryComponent} from "./layouts/gallery/gallery.component";
import {ServiceComponent} from "./layouts/service/service.component";
import {OfferComponent} from "./layouts/offer/offer.component";
import {FooterMainCategoryItem} from "./layouts/footer/footer-main-category-item/footer-main-category-item";
import {FooterCategoryItem} from "./layouts/footer/footer-category-item/footer.category-item";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GalleryComponent,
    ServiceComponent,
    OfferComponent,
    ReviewComponent,
    FooterComponent,
    FooterMainCategoryItem,
    FooterCategoryItem
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
