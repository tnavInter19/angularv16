import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(n => n.DashboardModule),
      },
      {
       path: 'jobs',
       loadChildren: () => import('./jobs/jobs.module').then(n => n.JobsModule),
     }
    ]
  },
  {
    path: '',
    loadChildren: () => import('./authentication/authentication.module').then(n => n.AuthenticationModule)
  }

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
