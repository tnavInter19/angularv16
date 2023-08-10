import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule],
  exports: [
    CarouselComponent,
    CommonModule,
    // other exported components, modules, etc.
  ],
})
export class SharedModuleModule {}
