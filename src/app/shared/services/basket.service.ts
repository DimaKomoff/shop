import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Basket } from '../interfaces/basket.interface';
import { Good } from '../interfaces/good.interface';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  public basketBehaviorSubject$ = new BehaviorSubject<number>(0);

  url = 'http://localhost:3000/basket/';

  constructor(
    private http: HttpClient
  ) { }

  get storage() {
    return window.localStorage;
  }

  getData(key: string) {
      return JSON.parse(this.storage.getItem(key));
  }

  addGood(good: Good, key: string, data: any) {
    this.basketBehaviorSubject$.next(good.price);
    this.storage.setItem(key, JSON.stringify(data));
  }

  deleteGood(good: Good, key: string, data: any) {
    this.basketBehaviorSubject$.next(-good.price);
    this.storage.setItem(key, JSON.stringify(data));
    if ( data.length === 0 ) { window.localStorage.clear(); }
  }
}
