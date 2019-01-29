import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {BasketService} from '../../shared/services/basket.service';
import { Router } from '@angular/router';
import { Good } from 'src/app/shared/interfaces/good.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  key = 'goodsInBasket';
  totalPrice = 0;
  goods: Array<Good>;

  private busketCount = 0;
  constructor(
    private basketService: BasketService,
    private router: Router
    ) {
   }

  ngOnInit() {
    if ( !this.basketService.getData(this.key) ) {
      this.goods = [];
    } else {
      this.goods = this.basketService.getData(this.key);
      this.totalPrice = this.goods.reduce((sum, curr) => {
        return sum + curr.price;
      }, 0);
      this.basketService.basketBehaviorSubject$.next(this.totalPrice);
    }
    this.basketService.basketBehaviorSubject$.subscribe(value => {
      this.busketCount += value;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  goToBasket() {
    this.router.navigate(['basket']);
  }

  goHome() {
    this.router.navigate(['']);
  }

}
