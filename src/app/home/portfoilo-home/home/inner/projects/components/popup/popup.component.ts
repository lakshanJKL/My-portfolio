import {Component, HostListener, inject, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {isPlatformBrowser, NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [
    MatIcon,
    NgIf,
    NgForOf
  ],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent implements OnInit {


  screenWidth: number = 0;

  isExtraLargeScreen: boolean = false;
  isLargeScreen: boolean = false;
  isMediumScreen: boolean = false;
  isLowScreen: boolean = false;


  projectTitle: any;
  gitHubLink: any;
  projectDesc: any;
  imgList:any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private router:Router,
              private dialogRef: MatDialogRef<PopupComponent

              >
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
    this.isExtraLargeScreen = this.screenWidth > 1440;
    this.isLargeScreen = this.screenWidth <= 1440 && this.screenWidth > 1024;
    this.isMediumScreen = this.screenWidth <= 1024 && this.screenWidth > 500;
    this.isLowScreen = this.screenWidth <= 500;
  }

  ngOnInit(): void {
    this.data.val.forEach((item: any) => {
      this.projectTitle = item.prjTitle;
      this.gitHubLink = item.gitHubLink;
      this.projectDesc = item.desc;
      this.imgList = item.tech;
    });
  }

  closeBtn() {
    this.dialogRef.close();
  }

  openGithub(link:any) {
    console.log("link : ", link)
    window.open(link);
  }
}
