import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fema',
  templateUrl: './fema.component.html',
  styleUrls: ['./fema.component.scss']
})
export class FEMAComponent implements OnInit {
  galleryImages: string[];

  constructor() {
    this.galleryImages = [
      'assets/img/work/app-icons/01.png',
      'assets/img/work/app-icons/02.png',
      'assets/img/work/app-icons/03.png',
      'assets/img/work/app-icons/04.png',
      'assets/img/work/app-icons/05.png',
      'assets/img/work/app-icons/06.png',
      'assets/img/work/app-icons/07.png',
      'assets/img/work/app-icons/08.png',
      'assets/img/work/app-icons/09.png'
    ];
  }

  ngOnInit() {}
}
