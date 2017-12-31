import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {
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
