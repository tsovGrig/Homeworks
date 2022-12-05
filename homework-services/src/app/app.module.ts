import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavComponent } from './components/nav/nav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import {ToggleService} from "./services/toggle.service";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
