import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegisterformComponent} from './registerform/registerform.component';

import{ CanactiveguardGuard } from './service/canactiveguard.guard';
import {MatToolbarModule} from '@angular/material/toolbar';
import { from } from 'rxjs';
const routes: Routes = [
  {path: 'register', component: RegisterformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


