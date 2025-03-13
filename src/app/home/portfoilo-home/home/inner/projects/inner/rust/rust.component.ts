import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {BoxComponent} from "../../components/box/box.component";
import {isPlatformBrowser, NgForOf, NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../../components/popup/popup.component";

@Component({
  selector: 'app-rust',
  standalone: true,
    imports: [
        BoxComponent,
        NgForOf,
        NgIf
    ],
  templateUrl: './rust.component.html',
  styleUrl: './rust.component.scss'
})
export class RustComponent implements OnInit{
  rustList:any[]=[];
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
    this.rustList = [
      // project 1 --------------------------
      {
        prjTitle: "Flavora Api",
        gitHubLink:"https://github.com/lakshanJKL/Flavora-api",
        bgImg:"/assets/project/rust/recipe.jpeg",
        desc:"Flavora is a dynamic recipe marketplace app that connects buyers and sellers of exclusive recipes. Chefs," +
          " food creators, and home cooks can sell their unique recipes, while buyers can discover and purchase " +
          "high-quality dishes from around the world. The app offers secure transactions, detailed recipe previews, " +
          "and personalized recommendations for every taste. Whether you're looking to monetize your culinary " +
          "skills or find new inspirations, Flavora makes buying and selling recipes effortless.",


        tech: [
          // technology icon 1 **
          {
            src:"./assets/tech/Rust.png",
            techName:"Rust"
          },
          // technology icon 2 **
          {
            src:"./assets/tech/actix-web.png",
            techName:"Actix-Web"
          },
          // technology icon 3 **
          {
            src:"./assets/tech/graphql.png",
            techName:"Graphql"
          },
          // technology icon 4 **
          {
            src:"./assets/tech/mongodb.png",
            techName:"Mongodb"
          },
        ]
      },
      // project 2 --------------------------
      {
        prjTitle: "ST-LMS",
        gitHubLink:"https://github.com/lakshanJKL/ST-LMS",
        bgImg:"/assets/project/rust/student.jpg",
        desc:"ST-LMS project revamped to use SeaORM and PostgreSQL, created as a personal learning project",

        tech: [
          // technology icon 1 **
          {
            src:"./assets/tech/Rust.png",
            techName:"Rust"
          },
          // technology icon 2 **
          {
            src:"./assets/tech/actix-web.png",
            techName:"Actix-Web"
          },
          // technology icon 3 **
          {
            src:"./assets/tech/seaorm.png",
            techName:"SeaORM"
          },
          // technology icon 4 **
          {
            src:"./assets/tech/postgresql.png",
            techName:"Postgresql"
          },
        ]
      },
      // project 3 --------------------------
      {
        prjTitle: "U-CRUD",
        gitHubLink:"https://github.com/Cinraa-Dev-Official/U-CRUD",
        bgImg:"/assets/project/rust/user.jpg",
        desc:"U-CRUD project created as a personal learning project",

        tech: [
          // technology icon 1 **
          {
            src:"./assets/tech/Rust.png",
            techName:"Rust"
          },
          // technology icon 2 **
          {
            src:"./assets/tech/actix-web.png",
            techName:"Actix-Web"
          },
          // technology icon 3 **
          {
            src:"./assets/tech/mongodb.png",
            techName:"MongoDb"
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
