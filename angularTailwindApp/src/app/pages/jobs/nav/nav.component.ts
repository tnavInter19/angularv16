import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'pmo-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
})
export class NavComponent {
 isOpen = false;

 @HostListener('document:click', ['$event'])
 onDocumentClick(event: Event) {
  const targetElement = event.target as HTMLElement;
  const svgElement = document.getElementById('svg-data');
  const svgElement2 = document.getElementById('svg-data2');
   if (targetElement !== svgElement && targetElement !== svgElement2) {
     // Close the menu when clicking outside of it
     this.isOpen=false;
   }
 }
}
