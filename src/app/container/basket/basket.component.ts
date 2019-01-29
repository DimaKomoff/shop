import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/shared/interfaces/good.interface';
import { BasketService } from 'src/app/shared/services/basket.service';
import { Basket } from 'src/app/shared/interfaces/basket.interface';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  key = 'goodsInBasket';
  goods: Array<Basket>;

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit() {
    if ( !this.basketService.getData(this.key) ) {
      this.goods = [];
    } else {
      this.goods = this.basketService.getData(this.key);
    }
  }

  delete(good, index) {
    this.goods.splice(index, 1);
    this.basketService.deleteGood(good, this.key, this.goods);
  }

}
