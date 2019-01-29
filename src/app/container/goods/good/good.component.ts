import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/shared/interfaces/good.interface';
import { GoodsService } from 'src/app/shared/services/goods.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {

  goodInfo: Good;

  constructor(
    private activateRoute: ActivatedRoute,
    private goodsService: GoodsService
  ) { }

  ngOnInit() {
    this.activateRoute
      .params
      .subscribe((params: Params) => {
        this.goodsService
          .getGoodInfo(+params['id'])
          .subscribe((result: Good) => this.goodInfo = result);
      });
  }

}
