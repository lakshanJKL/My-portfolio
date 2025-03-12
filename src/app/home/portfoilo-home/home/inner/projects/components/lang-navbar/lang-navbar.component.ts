import {Component, HostListener, Inject, inject, PLATFORM_ID} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {isPlatformBrowser, NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-lang-navbar',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    NgClass,
    NgIf
  ],
  templateUrl: './lang-navbar.component.html',
  styleUrl: './lang-navbar.component.scss'
})
export class LangNavbarComponent {
  selectedBtn: string = 'All';
  screenWidth: number = 0;

  isExtraLargeScreen: boolean = false;
  isLargeScreen: boolean = false;
  isMediumScreen: boolean = false;
  isLowScreen: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object , private router:Router) {
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


  selected(buttonTxt: string): void {

    if (buttonTxt === "All") {
      this.selectedBtn = buttonTxt;
      this.router.navigateByUrl("/main/projects/all").then();

    } else if (buttonTxt === "Mobile") {
      this.selectedBtn = buttonTxt;
      this.router.navigateByUrl("/main/projects/mobile").then();

    } else if (buttonTxt === "Rust") {
      this.selectedBtn = buttonTxt;
      this.router.navigateByUrl("/main/projects/rust").then();

    } else if (buttonTxt === "Angular") {
      this.selectedBtn = buttonTxt;
      this.router.navigateByUrl("/main/projects/angular").then();

    } else if (buttonTxt === "UIUX") {
      this.selectedBtn = buttonTxt;
      this.router.navigateByUrl("/main/projects/uiux").then();

    } else if (buttonTxt === "Java") {
      this.selectedBtn = buttonTxt;
      this.router.navigateByUrl("/main/projects/java").then();
    }

  }
}
