import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems

  constructor(private httpService:HttpService) { }

  ngOnInit() {
    this.httpService.getCartData().subscribe(
      res => this.cartItems=res);
  }

}
