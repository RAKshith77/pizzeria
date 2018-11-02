import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  private urlPizza = 'http://localhost:4000/getPizza';
  private urlIngridients = 'http://localhost:4000/getIngridients';
  private urlAddCart ='http://localhost:4000/addCart';
  private urlGetCart ='http://localhost:4000/getCart';
  private urlAddTopping = 'http://localhost:4000/addTopping'
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
//   send(body) {
//     /*  console.log(body.userID); */
//     console.log(body);
//     return this.httpClient.post(this.urlCart, body, {
//       headers: new HttpHeaders().set('Content-Type','application/json')
//     });
// }

postCartData(id){
  return this.httpClient.post(this.urlAddCart,{"id":id},{headers: new HttpHeaders ().set('Content-Type','application/json')});
}

getCartData(){
  return this.httpClient.get(this.urlGetCart);
}

addTopping(id,topping,total){
  return this.httpClient.post(this.urlAddTopping,{"id":id,"topping":topping,"total":total},{headers: new HttpHeaders ().set('Content-Type','application/json')});
}

}
