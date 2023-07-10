import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../data/image.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  images: { url: string; alt: string }[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.getRandomImages(5);
  }

  getRandomImages(count: number) {
    this.imageService.getRandomImages(count).subscribe(
      (images) => {
        this.images = images.map((image) => ({
          url: image.download_url,
          alt: image.author,
        }));
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
