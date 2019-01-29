import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsComponent } from './container/goods/goods.component';
import { BasketComponent } from './container/basket/basket.component';

const routes: Routes = [
  {path: '', redirectTo: 'goods', pathMatch: 'full'},
  {path: 'goods', component: GoodsComponent},
  {path: 'basket', component: BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
