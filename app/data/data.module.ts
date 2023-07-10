import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from './image.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  //declarations: [],
  providers: [ImageService],
})
export class DataModule {}
