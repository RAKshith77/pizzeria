import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
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

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getPizza().subscribe(res => this.pizzaHandler = res);
    this.httpService.getIngridients().subscribe(res => this.ingHandler = res);
      }

      calculateIngredients(status,pizzaId,ingid){ 
        console.log(status)
        // //  console.log(this.ingredients[0].indexOf(""));
        // console.log(this.ingredients)
        // // if(this.ingredients == null){
        // //   console.log("working"+this.pizzaHandler.length)
          
        // //   for (var i = 0; i < this.pizzaHandler.length; i++) {
        // //     this.ingredients[i][0].push(i);
            
        // // }
     

        // // }
        console.log(this.pizzaVal)
        if(this.pizzaVal.length == 0){
          console.log("pizza"+this.pizzaHandler.length);
          for(let i=0; i<this.pizzaHandler.length;i++){
            this.pizzaVal.push(i+1)
            this.ingredients.push([])
          }
          
          console.log(this.pizzaVal)
        }
        
         var index = this.pizzaVal.indexOf(pizzaId)
         console.log(index);
          if(status)    
          {   
            //this.total=basePrice+this.total+this.price;
            if(!(this.ingredients[index].includes(ingid))){
              this.ingredients[index].push(ingid)
            }      
            console.log(this.ingredients)      
          }    
          else    
          {   
            if(this.ingredients[index].includes(ingid)){
              this.ingredients[index].splice(index, 1);
            }
          }
        
    
        }

        addToCart(pizzaId){
          var index = this.ingredients[0].indexOf(pizzaId);
          var ing = this.ingredients[index]
          console.log(ing)
          
        }      
                
        
    
 }
    
 
