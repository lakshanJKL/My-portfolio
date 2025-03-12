import {Component, HostListener, Inject, inject, PLATFORM_ID} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {routes} from "../../../../../app.routes";
import {MarqueeTechComponent} from "./compoenets/marquee-tech/marquee-tech.component";
import {isPlatformBrowser, NgIf} from "@angular/common";
import {AllComponent} from "../projects/inner/all/all.component";
import {LangNavbarComponent} from "../projects/components/lang-navbar/lang-navbar.component";

@Component({
  selector: 'app-dashoard-home',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink,
    MarqueeTechComponent,
    NgIf,
    AllComponent,
    LangNavbarComponent,
    RouterOutlet
  ],
  templateUrl: './dashoard-home.component.html',
  styleUrl: './dashoard-home.component.scss'
})
export class DashoardHomeComponent {

  screenWidth: number = 0;

  isExtraLargeScreen: boolean = false;
  isLargeScreen: boolean = false;
  isMediumScreen: boolean = false;
  isLowScreen: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private router: Router
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
      this.updateScreenFlags();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = (event.target as Window).innerWidth;
      this.updateScreenFlags();
    }
  }

  private updateScreenFlags() {
    this.isExtraLargeScreen = this.screenWidth > 1366;
    this.isLargeScreen = this.screenWidth <= 1366 && this.screenWidth > 1024;
    this.isMediumScreen = this.screenWidth <= 1024 && this.screenWidth > 500;
    this.isLowScreen = this.screenWidth <= 500;
  }
  moreBtn() {
    this.router.navigateByUrl("//main/about").then();
  }
}


