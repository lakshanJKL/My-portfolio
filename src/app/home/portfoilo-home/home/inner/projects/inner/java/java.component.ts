import {Component, HostListener, Inject, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, NgForOf, NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../../components/popup/popup.component";
import {BoxComponent} from "../../components/box/box.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-java',
  standalone: true,
  imports: [
    NgForOf,
    BoxComponent,
    NgIf
  ],
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent implements OnInit {

  javaList:any[]=[];
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
    this.javaList = [
      // project 1 --------------------------
      {
        prjTitle: "Institute Api",
        gitHubLink:"https://github.com/3devs-idiots/institute-system-backend",
        bgImg:"/assets/project/java/college-api.jpg",
        desc:"An Institute Management System streamlines administrative, academic, and financial tasks in educational" +
          " institutions. It automates processes like student enrollment, attendance, and fee management while enhancing" +
          " communication between faculty, students, and parents. The system improves efficiency by providing real-time" +
          " access to important data and reducing manual workloads",

        tech: [
          // technology icon 1 **
          {
            src:"./assets/tech/java-2.png",
            techName:"Java"
          },
          // technology icon 2 **
          {
            src:"./assets/tech/spring-boot.png",
            techName:"Spring-Boot"
          },
          // technology icon 3 **
          {
            src:"./assets/tech/mysql.png",
            techName:"MySQL"
          },
          // technology icon 4 **
          {
            src:"./assets/tech/maven.png",
            techName:"Maven"
          },
        ]
      },

    // project 2 ----------------------------------
      {
        prjTitle: "Edu Smart",
        gitHubLink:"https://github.com/lakshanJKL/eduSmart",
        bgImg:"/assets/project/java/lms.jpg",
        desc:"The Learning Management System is an advanced Java project built using Hibernate and MySQL, designed to" +
          " streamline the management of trainers, students, income, and all other aspects of a training institute. " +
          "This admin panel automates various tasks, including student enrollment, trainer assignments, income " +
          "tracking, and scheduling, while also facilitating seamless communication between administrators, trainers," +
          " and students. The system enhances operational efficiency by providing real-time data access and " +
          "significantly reducing manual workloads, making it an essential tool for modern training management.",

        tech: [
          // technology icon 1 **
          {
            src:"./assets/tech/java-2.png",
            techName:"Java"
          },
          // technology icon 2 **
          {
            src:"./assets/tech/hibernate.png",
            techName:"Hibernate"
          },
          // technology icon 3 **
          {
            src:"./assets/tech/mysql.png",
            techName:"MySQL"
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
