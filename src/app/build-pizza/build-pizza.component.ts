import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import{ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.css']
})
export class BuildPizzaComponent implements OnInit {
total=0
topping =[];
ingredients;
value;
pizzaid;
index;

  constructor(private httpService:HttpService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.httpService.getIngridients().subscribe(
      res => this.ingredients=res);
      this.value=this.activatedRoute.queryParams.subscribe(params=>{this.pizzaid=params['pizzaId']})
  }

  TotalPrice(status,cost,name){
    if(status){
      this.total = this.total + cost;
      this.topping.push(name);
      console.log(this.topping);
    }
    else {
      this.total = this.total - cost;
      this.index=this.topping.indexOf(name);
      this.topping.splice(this.index,1);
     console.log(this.topping);
    }
   }
 
   addTopping(pizzaid,topping,total){
     this.httpService.addTopping(pizzaid,topping,total).subscribe(res =>this.pizzaid=res);
   }

}
