import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterformComponent } from './registerform/registerform.component';
import { WorkhourformComponent } from './workhourform/workhourform.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent,
    WorkhourformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
