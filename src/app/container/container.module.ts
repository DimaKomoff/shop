import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { BasketComponent } from './basket/basket.component';
import { GoodsComponent } from './goods/goods.component';
import { GoodComponent } from './goods/good/good.component';
import { ContainerRoutingModule } from './container-routing.module';
import { GoodsService } from '../shared/services/goods.service';
import { BasketService } from '../shared/services/basket.service';

@NgModule({
  declarations: [HeaderComponent, BasketComponent, GoodsComponent, GoodComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    GoodsService,
    BasketService
  ]
})
export class ContainerModule { }
