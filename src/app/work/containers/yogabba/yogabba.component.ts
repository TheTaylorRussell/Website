import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../shared/animations/router.transition';

@Component({
  selector: 'app-yogabba',
  templateUrl: './yogabba.component.html',
  styleUrls: ['./yogabba.component.scss'],
  animations: [routerTransition]
})
export class YoGabbaGabbaComponent implements OnInit {
  galleryImages: string[];

  constructor() {
    this.galleryImages = [
      'assets/img/work/yogabba/01.png',
      'assets/img/work/yogabba/02.png',
      'assets/img/work/yogabba/03.png',
      'assets/img/work/yogabba/04.png',
      'assets/img/work/yogabba/05.png'
    ];
  }

  ngOnInit() {}
}
