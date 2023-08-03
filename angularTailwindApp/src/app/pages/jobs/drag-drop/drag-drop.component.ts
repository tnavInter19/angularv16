import {
 CdkDrag,
 moveItemInArray,
 transferArrayItem
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'pmo-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.less']
})
export class DragDropComponent {
 items = [
  { item: 'Written Test', value: 0, color: '#93cc65' },
  { item: 'Coding Round', value: 0, color: '#cc7a65' },
  { item: 'Technical Interview', value: 0, color: '#00FFFF' },
  { item: 'HR Interview', value: 0, color: '#bf84ee' },
  { item: 'Hiring Manager Review', value: 0, color: '#df5bab' },
  { item: 'Behavioral Assesment', value: 0, color: '#5cc0a2' },
  { item: 'Bar Raiser', value: 0, color: '#4885ed' },
];
 basket = [
  { item: 'Start', value: 0, color: '#3cba54' },
  { item: 'Initial Screening', value: 0, color: '#edb33f' },
];

noReturnPredicate = (): boolean => false;
allowedPredicate = (item: CdkDrag): boolean => true;

 onDrop(event:any) {
   if (event.previousContainer === event.container) {
     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
   } else {
     transferArrayItem(
       event.previousContainer.data,
       event.container.data,
       event.previousIndex,
       event.currentIndex
     );
   }
 }

 onDragMoved() {
   // Add any actions you want when dragging is in progress
 }
}
