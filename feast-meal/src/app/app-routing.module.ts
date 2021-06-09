import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegisterformComponent} from './registerform/registerform.component';

import{ CanactiveguardGuard } from './service/canactiveguard.guard';
import {MatToolbarModule} from '@angular/material/toolbar';
import { from } from 'rxjs';
import { WorkhourformComponent } from './workhourform/workhourform.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
const routes: Routes = [
  {path: 'register', component: RegisterformComponent}, // path for the register form
  {path:'workhour', component:WorkhourformComponent},// path for the workhour form 
  {path:'menuitems', component:MenuitemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


