import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
 isSidebarOpen = false; // Set the initial state of the sidebar to open.
 activeLinkLabel: string = '';
 isDarkMode = false;
 links = [
  {
    label: 'Dashboard',
    route: '/dashboard',
    iconPath:
      'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
  },
  {
   label: 'Jobs',
   route: '/jobs',
   iconPath:
     'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
 },
  // Add other links similarly
];

constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  
}


ngOnInit(): void {
 this.updateActiveLink();
  // Subscribe to router events to update activeRouteLabel when navigation ends
  this.router.events
  .pipe(filter(event => event instanceof NavigationEnd))
  .subscribe(() => {
    this.updateActiveLink();
  });
}


isActive(route: string): boolean {
  return this.router.isActive(route, false);
}

 
updateActiveLink() {
 const activeLink = this.links.find(link => link.route === this.router.url);
 if (activeLink) {
   this.activeLinkLabel = activeLink.label;
 } else {
   this.activeLinkLabel = '';
 }
}

 toggleSidebar(): void {
   this.isSidebarOpen = !this.isSidebarOpen;
 }



 toggleDarkMode() {
   this.isDarkMode = !this.isDarkMode;
   this.updateDarkModeClass();
 }

 updateDarkModeClass() {
  if (this.isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
}