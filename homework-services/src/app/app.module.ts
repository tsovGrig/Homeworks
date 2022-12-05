import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavComponent } from './components/nav/nav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import {ToggleService} from "./services/toggle.service";
import {FormsModule} from "@angular/forms";
import {TodosService} from "./services/todos.service";


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ToggleService, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
