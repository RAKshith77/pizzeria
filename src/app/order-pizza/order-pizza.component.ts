import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent implements OnInit {
  pizzaHandler;
  typeveg = [];
  typenon = [];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getPizza().subscribe(res => this.pizzaHandler = res);
      }
 
}
