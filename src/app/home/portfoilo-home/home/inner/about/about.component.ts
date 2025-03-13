import {Component, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton} from "@angular/material/button";
import {isPlatformBrowser, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    NgForOf,
    NgIf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  email = "lakshanjkl49@gamil.com";
  contact_no = "+94702057054";
  address = '342/E Robert Gunawardana Mw, Malabe';
  screenWidth: number = 0;

  isExtraLargeScreen: boolean = false;
  isLargeScreen: boolean = false;
  isMediumScreen: boolean = false;
  isLowScreen: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
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

  experience = [
    {
      title: 'Software Engineer - Intern',
      company: 'SEEKERS CLOUD (PVT) LTD - Sri Lanka                               .',
      duration: 'April 10, 2024 - February 19, 2025 ',
      description: 'As a developer on the Vibe Clothing Project, I built and maintained scalable APIs for' +
        ' seamless integration and optimal performance. I collaborated with my team to enhance system stability and ' +
        'crafted an attractive Angular UI to elevate the user experience, successfully completing my internship at ' +
        'SEEKERS CLOUD '
    }
  ]

  education = [
    {
      title: 'Diploma in Information Technology (IT)',
      institution: 'ESOFT Metro Campus - Sri Lanka',
      duration: '',
      description: 'Successfully Completed diploma in Information Technology (IT) at ESOFT Metro Campus in Battaramulla    '
    },
    {
      title: 'Diploma in Industrial Placement Service (IPS) ',
      institution: 'Developers Stack Academy - Sri Lanka',
      duration: '',
      description: 'Successfully completed courses Spring-boot |Angular | Node Js | Java| TS | AWS | Web Development | Micro services | SQL | MySQL | MongoDB'
    },
    {
      title: 'Java Programming Master Course ',
      institution: 'Evotech Educational Institute - Sri Lanka',
      duration: '',
      description: 'Successfully completed Java programming language certificate course at Evotech Education institute'
    },
    {
      title: 'G.C.E Advanced Level Examination – 2020 – Commerce Stream  ',
      institution: 'Boys’ Model School-Malabe',
      duration: '',
      description: 'Business studies - B  | Economics - B   |  Accounting - C'
    }

  ]

  references = [
    {
      name: 'Hasika Sandaruwan',
      position: 'Senior Software Engineer',
      company: 'Seekers Cloud(PVT) Ltd',
      country: 'Sri Lanka',
      contact: '+94 714 911 257',
      email: 'contact@seekerscloud.com'
    },
    {
      name: 'Shayan Ariyasinghe',
      position: 'Software Engineer',
      company: 'Aio IT Solution (PVT) Ltd',
      country: 'Sri Lanka',
      contact: '+94 77 895 4356',
      email: 'Sheha.rashod.ariyasinghe@gmail.com'
    }
  ]

  downloadFile(type: string): void {
    let fileUrl = '';
    if (type === 'cv') {
      fileUrl = 'assets/coverLetter-cv/my_cv.pdf';
    } else if (type === 'cover-letter') {
      fileUrl = 'assets/coverLetter-cv/my_cv.pdf';
    }

    const link = document.createElement('a')
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop() || 'file';
    link.click();
  }
}
