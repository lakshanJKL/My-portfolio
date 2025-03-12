import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {BoxComponent} from "../../components/box/box.component";
import {isPlatformBrowser, NgForOf, NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../../components/popup/popup.component";

@Component({
  selector: 'app-angular',
  standalone: true,
    imports: [
        BoxComponent,
        NgForOf,
        NgIf
    ],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss'
})
export class AngularComponent implements OnInit{
  angularList:any[]=[];
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
    this.angularList = [
      // project 1 --------------------------
      {
        prjTitle: "Institute Admin",
        gitHubLink:"https://github.com/3devs-idiots/institute_frontend_admin",
        bgImg:"/assets/project/angular/college.jpg",
        desc:"The Institute Management System is an advanced Angular project designed to streamline the management of " +
          "students, teachers, exams, assignments, and all other aspects of an educational institution. This admin panel " +
          "automates various tasks, including enrollment, attendance tracking, assignment management, and exam scheduling, " +
          "while also facilitating seamless communication between administrators, teachers, and students. The system enhances " +
          "operational efficiency by providing real-time data access and significantly reducing manual workloads, making " +
          "it an essential tool for modern educational management.",

        tech: [
          // technology icon 1 **
          {
            src:"./assets/tech/Angular.png",
            techName:"Angular"
          },
          // technology icon 2 **
          {
            src:"./assets/tech/ts.png",
            techName:"TypeScript"
          },
          // technology icon 3 **
          {
            src:"./assets/tech/html.png",
            techName:"HTML"
          },
          // technology icon 4 **
          {
            src:"./assets/tech/css.png",
            techName:"CSS"
          },
        ]
      },
      // project 2 --------------------------
      {
        prjTitle: "Vibe Clothing",
        gitHubLink:"https://github.com/vibe-web-dev/vibeClothing_admin",
        bgImg:"/assets/project/angular/clothe.jpg",
        desc:"The Vibe Clothing Admin Panel is an advanced Angular project designed to streamline the management of " +
          "customers, suppliers, departments, items, and all other aspects of a clothing business. This admin panel " +
          "automates various tasks, including customer management, supplier tracking, inventory management, and " +
          "department coordination, while also facilitating seamless communication between staff and management." +
          " The system enhances operational efficiency by providing real-time data access and significantly reducing" +
          " manual workloads, making it an essential tool for modern clothing business management.",

        tech: [
          // technology icon 1 **
          {
            src:"./assets/tech/Angular.png",
            techName:"Angular"
          },
          // technology icon 2 **
          {
            src:"./assets/tech/ts.png",
            techName:"TypeScript"
          },
          // technology icon 3 **
          {
            src:"./assets/tech/html.png",
            techName:"HTML"
          },
          // technology icon 4 **
          {
            src:"./assets/tech/css.png",
            techName:"CSS"
          },
        ]
      },
    ];
  }

  openPopup(valueData:any) {
    this.dialog.open(PopupComponent,{
      width: '50%',
      height: '71%',
      data:{
        val:Array.isArray(valueData) ? valueData : [valueData]
      }
    })
  }

  openPopupSM(valueData: any) {
    this.dialog.open(PopupComponent,{
      width: '95%',
      height: '70vh',
      data:{
        val:Array.isArray(valueData) ? valueData : [valueData]
      }
    })
  }
}
