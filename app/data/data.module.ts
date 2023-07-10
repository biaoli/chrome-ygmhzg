import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from './image.service';

@NgModule({
  imports: [CommonModule],
  //declarations: [],
  providers: [ImageService],
})
export class DataModule {}
