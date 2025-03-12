import {Component, HostListener, Inject, Input, PLATFORM_ID} from '@angular/core';
import {Router} from "@angular/router";
import {isPlatformBrowser, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [
    NgIf,
    NgStyle
  ],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss'
})
export class BoxComponent {
  @Input() title = "Title"
  @Input() bgImage = "/assets/bg/bg-2.jpg";

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
