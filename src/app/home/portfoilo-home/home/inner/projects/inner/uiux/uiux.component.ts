import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {BoxComponent} from "../../components/box/box.component";
import {isPlatformBrowser, NgForOf, NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../../components/popup/popup.component";

@Component({
  selector: 'app-uiux',
  standalone: true,
    imports: [
        BoxComponent,
        NgForOf,
        NgIf
    ],
  templateUrl: './uiux.component.html',
  styleUrl: './uiux.component.scss'
})
export class UiuxComponent implements OnInit{
  UiList:any[]=[];
  screenWidth: number = 0;

  isExtraLargeScreen: boolean = false;
  isLargeScreen: boolean = false;
  isMediumScreen: boolean = false;
  isLowScreen: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private dialog: MatDialog
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
    this.isLowScreen = this.screenWidth <= 500;
  }

  ngOnInit(): void {
    this.UiList = [
      // project 1 --------------------------
      {
        prjTitle: "Institute UI",
        figmaLink:"https://www.figma.com/design/GhHuscq07WsWfhpaMChnQY/Institute?node-id=0-1&p=f&t=c6ccLnVh7UCcCLuQ-0",
        bgImg:"/assets/project/uiux/school.jpg",
        desc:"The Institute Management System is an advanced Angular project designed to streamline the management of " +
          "students, teachers, exams, assignments, and all other aspects of an educational institution. This admin panel " +
          "automates various tasks, including enrollment, attendance tracking, assignment management, and exam scheduling, " +
          "while also facilitating seamless communication between administrators, teachers, and students. The system enhances " +
          "operational efficiency by providing real-time data access and significantly reducing manual workloads, making " +
          "it an essential tool for modern educational management.",


        tech: [
          // technology icon 1 **
          {
            src:"./assets/tech/figma.png",
            techName:"Figma"
          },
        ]
      },
      // project 2 --------------------------
      {
        prjTitle: "Flavora UI",
        figmaLink:"https://www.figma.com/design/yv6ZHDHxf7qsnEf4GKhi1T/Flavora-App?node-id=0-1&t=IvQ7VbgMz2yqPkSV-1",
        bgImg:"/assets/project/uiux/recipe-ui.jpg",
        desc:"Flavora is a dynamic recipe marketplace app that connects buyers and sellers of exclusive recipes. Chefs," +
          " food creators, and home cooks can sell their unique recipes, while buyers can discover and purchase " +
          "high-quality dishes from around the world. The app offers secure transactions, detailed recipe previews, " +
          "and personalized recommendations for every taste. Whether you're looking to monetize your culinary " +
          "skills or find new inspirations, Flavora makes buying and selling recipes effortless.",


        tech: [
          // technology icon 1 **
          {
            src:"./assets/tech/figma.png",
            techName:"Figma"
          },
        ]
      },
      // project 3 --------------------------
      {
        prjTitle: "OneHR World UI",
        figmaLink:"https://www.figma.com/design/GeYIBNczA1khUYXXLNokPu/OneHR-World?node-id=0-1&t=iOFeC2ERghWYDJI1-1",
        bgImg:"/assets/project/uiux/hr.jpg",
        desc:"HR forum ui",


        tech: [
          // technology icon 1 **
          {
            src:"./assets/tech/figma.png",
            techName:"Figma"
          },

        ]
      },
      // project 4 --------------------------
      {
        prjTitle: "Inventory UI",
        figmaLink:"https://www.figma.com/design/K1HBO9M3eNaFeMAa6AVIZI/Inventory-project?node-id=0-1&p=f&t=J0vM1uCqlVL9x5Kb-0",
        bgImg:"/assets/project/uiux/inventory.jpg",
        desc:"inventory ui",


        tech: [
          // technology icon 1 **
          {
            src:"./assets/tech/figma.png",
            techName:"Figma"
          },
        ]
      },
    ];
  }

  openWindow(link:any) {
      window.open(link);
  }

  openWindowSm(link: any) {
    window.open(link);
  }
}
