import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  animations: [
    trigger('navbar', [
      transition(':enter', [
        style({ transform: 'translate(-140px,-80px)', opacity: 0 }),
        animate('1s ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
    trigger('activeLink', [
      state(
          'active',
          style({
            borderBottom: '3px solid white',
            paddingBottom: '5px',
          })
      ),
      state(
          'inactive',
          style({
            borderBottom: 'none',
          })
      ),
      transition('inactive => active', [
        style({ transform: 'translateX(-100%)', opacity: 1 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition('active => inactive', [
        animate('500ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  screenWidth: number = window.innerWidth;

  isExtraLargeScreen: boolean = false;
  isLargeScreen: boolean = false;
  isMediumScreen: boolean = false;
  isLowScreen: boolean = false;

  constructor(private router: Router) {
    this.updateScreenFlags();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.updateScreenFlags();
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  private updateScreenFlags() {
    this.isExtraLargeScreen = this.screenWidth > 1366;
    this.isLargeScreen = this.screenWidth <= 1366 && this.screenWidth > 1024;
    this.isMediumScreen = this.screenWidth <= 1024 && this.screenWidth > 500;
    this.isLowScreen = this.screenWidth <= 500;
  }
}
