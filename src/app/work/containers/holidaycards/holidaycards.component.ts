import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holidaycards',
  templateUrl: './holidaycards.component.html',
  styleUrls: ['./holidaycards.component.scss']
})
export class HolidayCardsComponent implements OnInit {
  galleryImages: string[];

  constructor() {
    this.galleryImages = [
      'assets/img/work/holidaycards/01.jpg',
      'assets/img/work/holidaycards/02.jpg',
      'assets/img/work/holidaycards/03.jpg'
    ];
  }

  ngOnInit() {}
}
