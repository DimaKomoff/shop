import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

   public categoriesSubject$ = new Subject<any>();
   public categoriesSubject = this.categoriesSubject$.asObservable();

  url = 'http://localhost:3000/goods/';

  constructor(
    private http: HttpClient
  ) { }

  getGoods(): Observable<any> {
    return this.http.get(this.url);
  }
  getCategories(): Observable<any> {
    return this.http.get('http://localhost:3000/categories');
  }
  getGoodInfo(id: number): Observable<any> {
    return this.http.get(this.url + id);
  }
  filterCategories(category: string) {
    this.categoriesSubject$.next(category);
  }
}
