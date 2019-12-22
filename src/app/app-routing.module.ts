import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgModel} from '@angular/forms';

import { AppComponent } from './app.component';


const routes: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule, NgModel],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppRoutingModule { }
