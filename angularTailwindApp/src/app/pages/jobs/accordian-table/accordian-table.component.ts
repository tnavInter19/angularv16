import { Component } from '@angular/core';

@Component({
  selector: 'app-accordian-table',
  templateUrl: './accordian-table.component.html',
  styleUrls: ['./accordian-table.component.scss']
})
export class AccordianTableComponent {
 accordionItems = [
  {
    header: 'Item 1',
    content: 'Content of item 1 goes here.',
    expanded: false,
  },
  {
    header: 'Item 2',
    content: 'Content of item 2 goes here.',
    expanded: false,
  },
  // Add more items as needed
];

toggleAccordionItem(item: any) {
  item.expanded = !item.expanded;
}
}
