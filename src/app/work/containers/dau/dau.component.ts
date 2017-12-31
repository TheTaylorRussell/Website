import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dau',
  templateUrl: './dau.component.html',
  styleUrls: ['./dau.component.scss']
})
export class DAUComponent implements OnInit {
  galleryImages: string[];

  constructor() {
    this.galleryImages = [
      'assets/img/work/dau/01.jpg',
      'assets/img/work/dau/02.png',
      'assets/img/work/dau/03.png'
    ];
  }

  ngOnInit() {}
}
