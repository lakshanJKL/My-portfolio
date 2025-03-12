import {Component, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-marquee-tech',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './marquee-tech.component.html',
  styleUrl: './marquee-tech.component.scss'
})
export class MarqueeTechComponent {
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
}
