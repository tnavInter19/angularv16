import { Component } from '@angular/core';

interface Person {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'pmo-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss'],
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

 resetPage() {
  this.currentPage = 1; // Reset current page to 1
}

 goToPage(page: number) {
   if (page >= 1 && page <= this.totalPages) {
     this.currentPage = page;
   }
 }

 getVisiblePages(): number[] {
   const pagesToShow = 5;
   const halfPagesToShow = Math.floor(pagesToShow / 2);
   let startPage = Math.max(this.currentPage - halfPagesToShow, 1);
   const endPage = Math.min(startPage + pagesToShow - 1, this.totalPages);

   if (endPage - startPage < pagesToShow - 1) {
     startPage = Math.max(endPage - pagesToShow + 1, 1);
   }

   return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
 }
}