import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AdUnit } from '../components/index/AdUnit';

@Injectable({
  providedIn: 'root'
})
export class AppInMemoryApiService implements InMemoryDbService {

  createDb() {
    var adunits: AdUnit[] = [{ id: 5, unit_name: 'ks', unit_price: 3 },{ id: 2, unit_name: 'test', unit_price: 8 }]

    return {adunits};
  }
  constructor() { }
}
