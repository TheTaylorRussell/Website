import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../shared/animations/router.transition';

@Component({
  selector: 'app-smokeout',
  templateUrl: './smokeout.component.html',
  styleUrls: ['./smokeout.component.scss'],
  animations: [routerTransition]
})
export class SmokeoutComponent implements OnInit {
  galleryImages: string[];
  animatedGalleryImages: string[];

  constructor() {
    this.galleryImages = [
      'assets/img/work/smokeout/smokeout-06.jpg',
      'assets/img/work/smokeout/smokeout-01.jpg',
      'assets/img/work/smokeout/smokeout-13.jpg',
      'assets/img/work/smokeout/smokeout-08.jpg',
      'assets/img/work/smokeout/smokeout-07.jpg',
      'assets/img/work/smokeout/smokeout-03.jpg'
    ];

    this.animatedGalleryImages = [
      'assets/img/work/smokeout/smokeout-22.gif',
      'assets/img/work/smokeout/smokeout-16.gif',
      'assets/img/work/smokeout/smokeout-20.gif',
      'assets/img/work/smokeout/smokeout-17.gif',
      'assets/img/work/smokeout/smokeout-14.gif',
      'assets/img/work/smokeout/smokeout-19.gif',
      'assets/img/work/smokeout/smokeout-23.gif'
    ];
  }

  ngOnInit() {}
}
