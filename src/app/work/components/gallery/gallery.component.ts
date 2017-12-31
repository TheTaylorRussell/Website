import { Component, OnInit, Input } from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() width = 540;
  @Input() height = 415;
  @Input() imageUrls: string[];
  @Input() autoPlay = false;
  @Input() autoPlayInterval = 3000;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {}

  ngOnInit() {
    this.galleryOptions = [
      {
        width: `${this.width}px`,
        height: `${this.height}px`,
        thumbnails: false,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageAutoPlay: this.autoPlay,
        imageAutoPlayPauseOnHover: true,
        imageAutoPlayInterval: this.autoPlayInterval,
        imageArrowsAutoHide: true,
        imageSize: 'contain'
      }
    ];

    this.galleryImages = [];
    this.imageUrls.forEach(imageUrl => {
      this.galleryImages.push({
        small: imageUrl,
        medium: imageUrl,
        big: imageUrl
      });
    });
  }
}
