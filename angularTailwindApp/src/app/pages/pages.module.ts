import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { routing } from './pages.routing';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    routing,
  ]
})
export class PagesModule { }
