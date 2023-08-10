import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
 carouselItems = [
  { src: 'https://images4.alphacoders.com/650/650771.jpg', alt: 'Slide 1' },
  { src: 'https://images3.alphacoders.com/127/1276653.jpg', alt: 'Slide 2' },
  { src: 'https://images5.alphacoders.com/122/1222439.jpg', alt: 'Slide 3' },
  { src: 'https://images2.alphacoders.com/667/667256.jpg', alt: 'Slide 4' },
  { src: 'https://images7.alphacoders.com/421/421296.jpg', alt: 'Slide 5' }
];

 activeIndex = 0; // Active slide index

 constructor() { }

 ngOnInit(): void {
 }

 // Navigate to the previous slide
 prevSlide(): void {
   this.activeIndex = (this.activeIndex - 1 + 5) % 5;
 }

 // Navigate to the next slide
 nextSlide(): void {
   this.activeIndex = (this.activeIndex + 1) % 5;
 }

 // Set the active slide index
 setActiveSlide(index: number): void {
   this.activeIndex = index;
 }
}

