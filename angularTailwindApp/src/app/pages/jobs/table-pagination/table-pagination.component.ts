import { Component } from '@angular/core';

interface Person {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'pmo-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.less'],
})
export class TablePaginationComponent {
  people: Person[] = [];

  itemsPerPage = 10; // Set the number of items per page here
  currentPage = 1;
  maxSize = 5; // Maximum number of pagination links to display

  // Generate 1000 dummy data items
  constructor() {
    for (let i = 1; i <= 1000; i++) {
      this.people.push({
        id: i,
        name: `Person ${i}`,
        age: Math.floor(Math.random() * 80) + 18,
      });
    }
  }

  get totalPages(): number {
    return Math.ceil(this.people.length / this.itemsPerPage);
  }

  get paginatedPeople(): Person[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.people.slice(startIndex, startIndex + this.itemsPerPage);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }
}
