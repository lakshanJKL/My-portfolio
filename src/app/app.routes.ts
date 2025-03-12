import {Routes} from '@angular/router';


export const routes: Routes = [
  {path: "", redirectTo: "main", pathMatch: "full"},
  {
    path: "main", loadChildren: () => import("./home/portfoilo-home/portfoilo-home.module")
      .then(m => m.PortfoiloHomeModule)
  }
];
