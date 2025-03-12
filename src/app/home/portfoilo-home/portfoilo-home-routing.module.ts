import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DashoardHomeComponent} from "./home/inner/dashoard-home/dashoard-home.component";
import {AboutComponent} from "./home/inner/about/about.component";
import {ProjectsComponent} from "./home/inner/projects/projects.component";
import {AllComponent} from "./home/inner/projects/inner/all/all.component";
import {JavaComponent} from "./home/inner/projects/inner/java/java.component";
import {MobileComponent} from "./home/inner/projects/inner/mobile/mobile.component";
import {AngularComponent} from "./home/inner/projects/inner/angular/angular.component";
import {UiuxComponent} from "./home/inner/projects/inner/uiux/uiux.component";
import {RustComponent} from "./home/inner/projects/inner/rust/rust.component";


const routes: Routes = [
  {
    path: "", component: HomeComponent, children: [
      {path: "", redirectTo: "home", pathMatch: "full"},
      {
        path: "home", component: DashoardHomeComponent, children: [
          {path: "", redirectTo: "all", pathMatch: "full"},
          {path: "all", component: AllComponent},
        ]
      },
      {path: "about", component: AboutComponent},
      {
        path: "projects", component: ProjectsComponent, children: [
          {path: "", redirectTo: "all", pathMatch: "full"},
          {path: "all", component: AllComponent},
          {path: "java", component: JavaComponent},
          {path: "mobile", component: MobileComponent},
          {path: "angular", component: AngularComponent},
          {path: "uiux", component: UiuxComponent},
          {path: "rust", component: RustComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfoiloHomeRoutingModule {
}
