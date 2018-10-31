import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  private urlPizza = 'http://localhost:4000/getPizza';
  private urlIngridients = 'http://localhost:4000/getIngridients';
  body: any;
  jsonstring: any;

  constructor(private httpClient: HttpClient) {
  }
  // get() {
  //   return this.httpClient.get(this.url);
  // }
  getPizza() {
    return this.httpClient.get(this.urlPizza);
  }
  getIngridients() {
    return this.httpClient.get(this.urlIngridients);
  }
  // send(body) {
  //   /*  console.log(body.userID); */
  //   console.log(body);
  //   return this.httpClient.post(this.url, body, {
  //     headers: new HttpHeaders().set('Content-Type','application/json')
  //   });



}
