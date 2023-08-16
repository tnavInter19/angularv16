import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarouselComponent, DatePickerComponent],
  imports: [CommonModule,
  FormsModule],
  exports: [
    CarouselComponent,
    CommonModule,
    DatePickerComponent,
    // other exported components, modules, etc.
  ],
})
export class SharedModuleModule {}
