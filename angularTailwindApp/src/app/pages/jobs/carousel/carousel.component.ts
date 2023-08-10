import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
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

 activeIndex = 2; // Active slide index

 constructor() { }

 ngOnInit(): void {
 }

}

