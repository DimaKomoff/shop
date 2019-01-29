import { Component } from '@angular/core';
import { BasketService } from './shared/services/basket.service';
import { Good } from './shared/interfaces/good.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';
}
