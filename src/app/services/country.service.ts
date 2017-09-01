import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {

  private _products = ['Widget', 'Gadget', 'Doohickey'];
  private _countries = ['US', 'Germany', 'UK', 'Japan', 'Italy', 'Greece'];

  get products(): string[] {
    return this._products;
  }

  get countries(): string[] {
    return this._countries;
  }

  // get matches for a search term
  getData(count: number): any[] {
    let data = [],
      countryId,
      productId;

    for (let i = 0; i < count; i++) {
      countryId = Math.floor(Math.random() * this._countries.length);
      productId = Math.floor(Math.random() * this._products.length);
      data.push({
        id: i,
        countryId: countryId,
        productId: productId,
        date: new Date(2014, i % 12, i % 28),
        amount: Math.random() * 10000,
        active: i % 4 === 0
      });
    }
    return data;
  }
}
