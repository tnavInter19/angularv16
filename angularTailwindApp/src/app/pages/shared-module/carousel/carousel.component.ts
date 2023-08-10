import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { CarouselItemComponent } from './carousel-item/carousel-item.component'; // Create a CarouselItemComponent if it doesn't exist

@Component({
  selector: 'app-carousel',
  template: `
    <div class="carousel relative">
      <div class="carousel-inner flex transition-transform duration-300 ease-out" [style.transform]="transform">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class CarouselComponent implements AfterContentInit {
  @ContentChildren(CarouselItemComponent) items!: QueryList<CarouselItemComponent>;
  private currentIndex = 0;
  private itemWidth = 100; // Set the desired item width

  get transform(): string {
    return `translateX(-${this.currentIndex * this.itemWidth}%)`;
  }

  ngAfterContentInit() {
    this.items.changes.subscribe(() => {
      this.itemWidth = 100 / this.items.length;
    });
  }

  // Implement navigation methods here (e.g., next(), prev())
}
