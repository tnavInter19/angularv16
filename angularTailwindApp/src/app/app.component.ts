import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 isSidebarOpen = false; // Set the initial state of the sidebar to open.

 constructor() { }

 ngOnInit(): void {
 }

 toggleSidebar(): void {
   this.isSidebarOpen = !this.isSidebarOpen;
 }
}