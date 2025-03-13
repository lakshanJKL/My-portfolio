import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {BoxComponent} from "../../components/box/box.component";
import {isPlatformBrowser, NgForOf, NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../../components/popup/popup.component";

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [
    BoxComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss'
})
export class AllComponent implements OnInit {

  allList: any[] = [];
  screenWidth: number = 0;

  isExtraLargeScreen: boolean = false;
  isLargeScreen: boolean = false;
  isMediumScreen: boolean = false;
  isLowScreen: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private dialog: MatDialog) {
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

  ngOnInit(): void {
    this.allList = [
      // project 1 --------------------------
      {
        prjTitle: "Institute Admin",
        gitHubLink: "https://github.com/3devs-idiots/institute_frontend_admin",
        bgImg: "/assets/project/angular/college.jpg",
        isBool: false,
        desc: "The Institute Management System is an advanced Angular project designed to streamline the management of " +
          "students, teachers, exams, assignments, and all other aspects of an educational institution. This admin panel " +
          "automates various tasks, including enrollment, attendance tracking, assignment management, and exam scheduling, " +
          "while also facilitating seamless communication between administrators, teachers, and students. The system enhances " +
          "operational efficiency by providing real-time data access and significantly reducing manual workloads, making " +
          "it an essential tool for modern educational management.",

        tech: [
          // technology icon 1 **
          {
            src: "./assets/tech/Angular.png",
            techName: "Angular"
          },
          // technology icon 2 **
          {
            src: "./assets/tech/ts.png",
            techName: "TypeScript"
          },
          // technology icon 3 **
          {
            src: "./assets/tech/html.png",
            techName: "HTML"
          },
          // technology icon 4 **
          {
            src: "./assets/tech/css.png",
            techName: "CSS"
          },
        ]
      },
      // project 2 --------------------------
      {
        prjTitle: "Institute Api",
        gitHubLink: "https://github.com/3devs-idiots/institute-system-backend",
        bgImg: "/assets/project/java/college-api.jpg",
        isBool: false,
        desc: "An Institute Management System streamlines administrative, academic, and financial tasks in educational" +
          " institutions. It automates processes like student enrollment, attendance, and fee management while enhancing" +
          " communication between faculty, students, and parents. The system improves efficiency by providing real-time" +
          " access to important data and reducing manual workloads",

        tech: [
          // technology icon 1 **
          {
            src: "./assets/tech/java-2.png",
            techName: "Java"
          },
          // technology icon 2 **
          {
            src: "./assets/tech/spring-boot.png",
            techName: "Spring-Boot"
          },
          // technology icon 3 **
          {
            src: "./assets/tech/mysql.png",
            techName: "MySQL"
          },
          // technology icon 4 **
          {
            src: "./assets/tech/maven.png",
            techName: "Maven"
          },
        ]
      },
      // project 3 --------------------------
      {
        prjTitle: "Flavora Mobile",
        gitHubLink: "https://github.com/Cinraa-Dev-Official/flavora-app",
        bgImg: "/assets/project/mobile/recipe-front.jpg",
        isBool: false,
        desc: "Flavora is a dynamic recipe marketplace app that connects buyers and sellers of exclusive recipes. Chefs," +
          " food creators, and home cooks can sell their unique recipes, while buyers can discover and purchase " +
          "high-quality dishes from around the world. The app offers secure transactions, detailed recipe previews, " +
          "and personalized recommendations for every taste. Whether you're looking to monetize your culinary " +
          "skills or find new inspirations, Flavora makes buying and selling recipes effortless.",


        tech: [
          // technology icon 1 **
          {
            src: "./assets/tech/ts.png",
            techName: "TypeScript"
          },
          // technology icon 2 **
          {
            src: "./assets/tech/expo.png",
            techName: "Expo"
          },
          // technology icon 3 **
          {
            src: "./assets/tech/react-native.png",
            techName: "React Native"
          },
        ]
      },

      // project 4 --------------------------
      {
        prjTitle: "Institute UI",
        gitHubLink: "https://www.figma.com/design/GhHuscq07WsWfhpaMChnQY/Institute?node-id=0-1&p=f&t=c6ccLnVh7UCcCLuQ-0",
        bgImg: "/assets/project/uiux/school.jpg",
        isBool: true,
        desc: "The Institute Management System is an advanced Angular project designed to streamline the management of " +
          "students, teachers, exams, assignments, and all other aspects of an educational institution. This admin panel " +
          "automates various tasks, including enrollment, attendance tracking, assignment management, and exam scheduling, " +
          "while also facilitating seamless communication between administrators, teachers, and students. The system enhances " +
          "operational efficiency by providing real-time data access and significantly reducing manual workloads, making " +
          "it an essential tool for modern educational management.",


        tech: [
          // technology icon 1 **
          {
            src: "./assets/tech/figma.png",
            techName: "Figma"
          },
        ]
      },

      // project 5 --------------------------
      {
        prjTitle: "Flavora Api",
        gitHubLink: "https://github.com/lakshanJKL/Flavora-api",
        bgImg: "/assets/project/rust/recipe.jpeg",
        isBool: false,
        desc: "Flavora is a dynamic recipe marketplace app that connects buyers and sellers of exclusive recipes. Chefs," +
          " food creators, and home cooks can sell their unique recipes, while buyers can discover and purchase " +
          "high-quality dishes from around the world. The app offers secure transactions, detailed recipe previews, " +
          "and personalized recommendations for every taste. Whether you're looking to monetize your culinary " +
          "skills or find new inspirations, Flavora makes buying and selling recipes effortless.",


        tech: [
          // technology icon 1 **
          {
            src: "./assets/tech/Rust.png",
            techName: "Rust"
          },
          // technology icon 2 **
          {
            src: "./assets/tech/actix-web.png",
            techName: "Actix-Web"
          },
          // technology icon 3 **
          {
            src: "./assets/tech/graphql.png",
            techName: "Graphql"
          },
          // technology icon 4 **
          {
            src: "./assets/tech/mongodb.png",
            techName: "Mongodb"
          },
        ]
      },

      // project 6 --------------------------
      {
        prjTitle: "Vibe Clothing",
        gitHubLink: "https://github.com/lakshanJKL/Vibe-Clothing-Admin",
        bgImg: "/assets/project/angular/clothe.jpg",
        isBool: false,
        desc: "The Vibe Clothing Admin Panel is an advanced Angular project designed to streamline the management of " +
          "customers, suppliers, departments, items, and all other aspects of a clothing business. This admin panel " +
          "automates various tasks, including customer management, supplier tracking, inventory management, and " +
          "department coordination, while also facilitating seamless communication between staff and management." +
          " The system enhances operational efficiency by providing real-time data access and significantly reducing" +
          " manual workloads, making it an essential tool for modern clothing business management.",

        tech: [
          // technology icon 1 **
          {
            src: "./assets/tech/Angular.png",
            techName: "Angular"
          },
          // technology icon 2 **
          {
            src: "./assets/tech/ts.png",
            techName: "TypeScript"
          },
          // technology icon 3 **
          {
            src: "./assets/tech/html.png",
            techName: "HTML"
          },
          // technology icon 4 **
          {
            src: "./assets/tech/css.png",
            techName: "CSS"
          },
        ]
      },

      // project 7 --------------------------
      {
        prjTitle: "ST-LMS",
        gitHubLink: "https://github.com/lakshanJKL/ST-LMS",
        bgImg: "/assets/project/rust/student.jpg",
        isBool: false,
        desc: "ST-LMS project revamped to use SeaORM and PostgreSQL, created as a personal learning project",

        tech: [
          // technology icon 1 **
          {
            src: "./assets/tech/Rust.png",
            techName: "Rust"
          },
          // technology icon 2 **
          {
            src: "./assets/tech/actix-web.png",
            techName: "Actix-Web"
          },
          // technology icon 3 **
          {
            src: "./assets/tech/seaorm.png",
            techName: "SeaORM"
          },
          // technology icon 4 **
          {
            src: "./assets/tech/postgresql.png",
            techName: "Postgresql"
          },
        ]
      },

      // project 8 ----------------------------------
      {
        prjTitle: "U-CRUD",
        gitHubLink: "https://github.com/Cinraa-Dev-Official/U-CRUD",
        bgImg: "/assets/project/rust/user.jpg",
        isBool: false,
        desc: "U-CRUD project created as a personal learning project",

        tech: [
          // technology icon 1 **
          {
            src: "./assets/tech/Rust.png",
            techName: "Rust"
          },
          // technology icon 2 **
          {
            src: "./assets/tech/actix-web.png",
            techName: "Actix-Web"
          },
          // technology icon 3 **
          {
            src: "./assets/tech/mongodb.png",
            techName: "MongoDb"
          },
        ]
      },
      // project 9 ----------------------------------
      {
        prjTitle: "Flavora UI",
        gitHubLink: "https://www.figma.com/design/yv6ZHDHxf7qsnEf4GKhi1T/Flavora-App?node-id=0-1&t=IvQ7VbgMz2yqPkSV-1",
        bgImg: "/assets/project/uiux/recipe-ui.jpg",
        isBool: true,
        desc: "Flavora is a dynamic recipe marketplace app that connects buyers and sellers of exclusive recipes. Chefs," +
          " food creators, and home cooks can sell their unique recipes, while buyers can discover and purchase " +
          "high-quality dishes from around the world. The app offers secure transactions, detailed recipe previews, " +
          "and personalized recommendations for every taste. Whether you're looking to monetize your culinary " +
          "skills or find new inspirations, Flavora makes buying and selling recipes effortless.",


        tech: [
          // technology icon 1 **
          {
            src: "./assets/tech/figma.png",
            techName: "Figma"
          },
        ]
      },
      // project 10 ----------------------------------
      {
        prjTitle: "OneHR World UI",
        gitHubLink: "https://www.figma.com/design/GeYIBNczA1khUYXXLNokPu/OneHR-World?node-id=0-1&t=iOFeC2ERghWYDJI1-1",
        bgImg: "/assets/project/uiux/hr.jpg",
        isBool: true,
        desc: "HR forum ui",


        tech: [
          // technology icon 1 **
          {
            src: "./assets/tech/figma.png",
            techName: "Figma"
          },

        ]
      },
      // project 11----------------------------------
      {
        prjTitle: "Edu Smart",
        gitHubLink: "https://github.com/lakshanJKL/eduSmart",
        bgImg: "/assets/project/java/lms.jpg",
        isBool: false,
        desc: "The Learning Management System is an advanced Java project built using Hibernate and MySQL, designed to" +
          " streamline the management of trainers, students, income, and all other aspects of a training institute. " +
          "This admin panel automates various tasks, including student enrollment, trainer assignments, income " +
          "tracking, and scheduling, while also facilitating seamless communication between administrators, trainers," +
          " and students. The system enhances operational efficiency by providing real-time data access and " +
          "significantly reducing manual workloads, making it an essential tool for modern training management.",

        tech: [
          // technology icon 1 **
          {
            src: "./assets/tech/java-2.png",
            techName: "Java"
          },
          // technology icon 2 **
          {
            src: "./assets/tech/hibernate.png",
            techName: "Hibernate"
          },
          // technology icon 3 **
          {
            src: "./assets/tech/mysql.png",
            techName: "MySQL"
          },
        ]
      },
      // project 12----------------------------------
      {
        prjTitle: "Inventory UI",
        gitHubLink: "https://www.figma.com/design/K1HBO9M3eNaFeMAa6AVIZI/Inventory-project?node-id=0-1&p=f&t=J0vM1uCqlVL9x5Kb-0",
        bgImg: "/assets/project/uiux/inventory.jpg",
        isBool: true,
        desc: "inventory ui",


        tech: [
          // technology icon 1 **
          {
            src: "./assets/tech/figma.png",
            techName: "Figma"
          },
        ]
      },
    ];
  }

  openPopup(valueData: any) {
    if (valueData.isBool) {
      window.open(valueData.gitHubLink);
    } else {
      this.dialog.open(PopupComponent, {
        width: '50%',
        height: '71%',
        data: {
          val: Array.isArray(valueData) ? valueData : [valueData]
        }
      })
    }
  }

  openPopupSM(valueData: any) {
   if (valueData.isBool){
     window.open(valueData.gitHubLink);
   }else {
     this.dialog.open(PopupComponent, {
       width: '95%',
       height: '70vh',
       data: {
         val: Array.isArray(valueData) ? valueData : [valueData]
       }
     })
   }
  }
}
