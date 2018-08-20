import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdUnit } from './components/index/AdUnit';



@Injectable({
  providedIn: 'root'
})
export class AdunitService {

  uri='http://localhost:4200/adunit';

  constructor(private http: HttpClient) { }

  addAdUnit(unit_name, unit_price){
    const obj = {
      unit_name: unit_name,
      unit_price: unit_price
    };
    this.http.post(`${this.uri}/adunits/4`,obj).subscribe(res => console.log('Done'));
  }

  getAdUnits() {
    return this
           .http
           .get(`${this.uri}/adunits`);
    }

  editAdUnit(id) {
    return this.http.get(`${this.uri}/adunits/${id}`);
  }

  updateAdUnit(unit_name, unit_price, id) {
    const obj = {
      unit_name: unit_name,
      unit_price: unit_price
    };
    this.http.post(`${this.uri}/adunits/${id}`,obj).subscribe(res => console.log('Done'));
  }

  deleteAdUnit(id) {
    return this
              .http
              .delete(`${this.uri}/adunits/${id}`);
  }
}
