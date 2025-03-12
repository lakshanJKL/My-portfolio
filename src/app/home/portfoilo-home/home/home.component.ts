import {Component, HostListener, Inject, inject, PLATFORM_ID} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {NavbarComponent} from '../../compoenents/navbar/navbar.component';
import {isPlatformBrowser, NgClass, NgIf} from '@angular/common';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    NgIf,
    RouterLink,
    MatIcon,
    NgClass
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  selectedBtn: string = 'projects';
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
    this.isLargeScreen = this.screenWidth <= 1366 && this.screenWidth > 1100;
    this.isMediumScreen = this.screenWidth <= 1024 && this.screenWidth > 500;
    this.isLowScreen = this.screenWidth <= 500;
  }


  // Function to update the selected button
  selectProject(button: string): void {
    this.selectedBtn = button;
    this.router.navigateByUrl("/main/projects").then();
  }

  selectAbout(button: string): void {
    this.selectedBtn = button;
    this.router.navigateByUrl("/main/about").then();
  }
}
