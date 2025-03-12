import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {BoxComponent} from "../../components/box/box.component";
import {isPlatformBrowser, NgForOf, NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../../components/popup/popup.component";

@Component({
  selector: 'app-mobile',
  standalone: true,
    imports: [
        BoxComponent,
        NgForOf,
        NgIf
    ],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.scss'
})
export class MobileComponent implements OnInit{
  mobileList:any[]=[];
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
    this.mobileList = [
      // project 1 --------------------------
      {
        prjTitle: "Flavora Mobile",
        gitHubLink:"https://github.com/Cinraa-Dev-Official/flavora-app",
        bgImg:"/assets/project/mobile/recipe-front.jpg",
        desc:"Flavora is a dynamic recipe marketplace app that connects buyers and sellers of exclusive recipes. Chefs," +
          " food creators, and home cooks can sell their unique recipes, while buyers can discover and purchase " +
          "high-quality dishes from around the world. The app offers secure transactions, detailed recipe previews, " +
          "and personalized recommendations for every taste. Whether you're looking to monetize your culinary " +
          "skills or find new inspirations, Flavora makes buying and selling recipes effortless.",


        tech: [
          // technology icon 1 **
          {
            src:"./assets/tech/ts.png",
            techName:"TypeScript"
          },
          // technology icon 2 **
          {
            src:"./assets/tech/expo.png",
            techName:"Expo"
          },
          // technology icon 3 **
          {
            src:"./assets/tech/react-native.png",
            techName:"React Native"
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
