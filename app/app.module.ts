import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './features/product/product.component';
import { FeaturesModule } from './features/features.module';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  // {
  //   path: 'producs',
  //   loadChildren: () =>
  //     import('./features/features.module').then((m) => m.FeaturesModule),
  // },
  { path: 'products', component: ProductComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FeaturesModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
