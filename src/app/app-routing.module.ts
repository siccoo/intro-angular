import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgModel} from '@angular/forms';

import { AppComponent } from './app.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgModel],
  exports: [RouterModule]
})
export class AppRoutingModule { }
