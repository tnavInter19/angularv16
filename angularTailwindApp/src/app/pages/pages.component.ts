import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
 isSidebarOpen = false; // Set the initial state of the sidebar to open.

 constructor() { }

 ngOnInit(): void {
 }

 toggleSidebar(): void {
   this.isSidebarOpen = !this.isSidebarOpen;
 }
}