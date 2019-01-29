import { Component, OnInit } from '@angular/core';
import { Good } from '../../shared/interfaces/good.interface';
import { GoodsService } from 'src/app/shared/services/goods.service';
import { Router } from '@angular/router';
import { BasketService } from 'src/app/shared/services/basket.service';
import { Basket } from 'src/app/shared/interfaces/basket.interface';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  key = 'goodsInBasket';
  allGoods: Array<Good>;
  goods: Array<Good>;
  goodsInBasket: Array<Basket> = [];
  categories: Array<{id: number, name: string}>;

  constructor(
    private goodsService: GoodsService,
    private basketService: BasketService,
    private router: Router
  ) { }

  ngOnInit() {
    this.goodsService
      .getGoods()
      .subscribe(result => this.goods = this.allGoods = result);
    this.goodsService
      .getCategories()
      .subscribe(categories => this.categories = categories);
    this.goodsService
      .categoriesSubject$
      .subscribe((categories) => this.goods = this.allGoods.filter((arr) => {
        if ( categories === 'all' ) { return arr; }
        return arr.category === categories;
      }));
      if ( !this.basketService.getData(this.key) ) {
        this.goodsInBasket = [];
      } else {
        this.goodsInBasket = this.basketService.getData(this.key);
      }
  }

  toGoodInfo(good: Good) {
    const id = +good.id;
    this.router.navigate(['goods', id]);
  }

  onSelect(e) {
    this.goodsService.filterCategories(e.target.value);
  }

  add(good: Good) {
    const addedGood: Basket = {
      name: good.name,
      price: +good.price
    };
    this.goodsInBasket.push(addedGood);
    this.basketService
      .addGood(good, this.key, this.goodsInBasket);
    event.stopPropagation();
  }

}
