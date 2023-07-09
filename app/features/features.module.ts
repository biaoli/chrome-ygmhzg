import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ImageService } from '../data/image.service';

const routes: Routes = [{ path: '', component: ProductComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ProductComponent],
  providers: [ImageService],
})
export class FeaturesModule {}
