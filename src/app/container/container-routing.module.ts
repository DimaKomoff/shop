import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoodComponent } from './goods/good/good.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'goods/:id', component: GoodComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ContainerRoutingModule {}
