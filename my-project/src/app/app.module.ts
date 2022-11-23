import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./layouts/header/header.component";
import {FooterComponent} from "./layouts/footer/footer.component";
import {ContentComponent} from "./layouts/content/content.component";
import {TimerComponent} from "./layouts/timer/timer.component";
import {FormsModule} from "@angular/forms";
import {TimerItemComponent} from "./layouts/timer/timerItem/timer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    TimerComponent,
    TimerItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
