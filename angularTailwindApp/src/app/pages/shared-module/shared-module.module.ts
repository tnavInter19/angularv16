import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';



@NgModule({
  declarations: [
    CarouselComponent,
    CarouselItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
   CarouselComponent,
   CarouselItemComponent,
   CommonModule,
   // other exported components, modules, etc.
 ],
})
export class SharedModuleModule { }
