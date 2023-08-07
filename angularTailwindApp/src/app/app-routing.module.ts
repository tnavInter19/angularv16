import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes, ExtraOptions } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(n => n.PagesModule)
  }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
