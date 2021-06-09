import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterformComponent } from './registerform/registerform.component';
import { WorkhourformComponent } from './workhourform/workhourform.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent,
    WorkhourformComponent,
    MenuitemsComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
