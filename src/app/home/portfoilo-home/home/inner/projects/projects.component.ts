import {Component, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import {LangNavbarComponent} from "./components/lang-navbar/lang-navbar.component";
import {Router, RouterOutlet} from "@angular/router";
import {isPlatformBrowser, NgIf} from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    LangNavbarComponent,
    RouterOutlet,
    NgIf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  screenWidth: number = 0;

  isExtraLargeScreen: boolean = false;
  isLargeScreen: boolean = false;
  isMediumScreen: boolean = false;
  isLowScreen: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
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
    this.isExtraLargeScreen = this.screenWidth > 1440;
    this.isLargeScreen = this.screenWidth <= 1440 && this.screenWidth > 1024;
    this.isMediumScreen = this.screenWidth <= 1024 && this.screenWidth > 500;
    this.isLowScreen = this.screenWidth <= 500;
  }

}
