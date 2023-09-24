import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from '../shared/shared.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'products', component: ProductListComponent },
    ]),

    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
    
    SharedModule,
    
  ]
})
export class ProductModule { }
