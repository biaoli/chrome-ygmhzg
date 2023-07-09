import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../data/image.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  // constructor() { }
  randomImageUrl: string;

  constructor(private imageService: ImageService) {
    this.imageService
      .getRandomImage(500, 300)
      .subscribe((url) => (this.randomImageUrl = url));
  }

  ngOnInit() {}
}
