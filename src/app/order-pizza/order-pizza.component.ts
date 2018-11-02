import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import{ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent implements OnInit {
  pizzaHandler;
  ingHandler;
  ingredients=[];
  pizzaVal=[];

  constructor(private httpService: HttpService,private router:Router) { }

  ngOnInit() {
    this.httpService.getPizza().subscribe(res => this.pizzaHandler = res);
    this.httpService.getIngridients().subscribe(res => this.ingHandler = res);
      }

 

          
        addToCart(id){
          this.httpService.postCartData(id).subscribe();
        }
        buildPage(id){
          this.router.navigate(['buildPizza'],{queryParams:{pizzaId:id}});
        } 
                
        
    
 }
    
 
