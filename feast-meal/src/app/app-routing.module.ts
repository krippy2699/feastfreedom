import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegisterformComponent} from './registerform/registerform.component';

import{ CanactiveguardGuard } from './service/canactiveguard.guard';
import {MatToolbarModule} from '@angular/material/toolbar';
import { from } from 'rxjs';
import { WorkhourformComponent } from './workhourform/workhourform.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'register', component: RegisterformComponent}, // path for the register form
  {path:'workhour', component:WorkhourformComponent},// path for the workhour form 
  {path:'menuitems', component:MenuitemsComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


