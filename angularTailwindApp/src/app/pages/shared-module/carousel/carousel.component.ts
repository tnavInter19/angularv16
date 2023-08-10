import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() items!: { src: string; alt: string }[]; // Define input property to receive items
  @Input() activeIndex: number=0;

  private intervalId: any; // Store the interval ID

  constructor() {}

  ngOnInit(): void {
    this.startAutoSwitch(); // Start automatic switching on component initialization
  }

  // Start automatic slide switching
  startAutoSwitch(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 2000); // Adjust the interval duration (in milliseconds) as needed
  }
  // Navigate to the previous slide
  prevSlide(): void {
    this.activeIndex =
      (this.activeIndex - 1 + this.items.length) % this.items.length;
  }

  // Navigate to the next slide
  nextSlide(): void {
    this.activeIndex = (this.activeIndex + 1) % this.items.length;
  }

  // Set the active slide index
  setActiveSlide(index: number): void {
    this.activeIndex = index;
  }
}
