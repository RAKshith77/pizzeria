import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderPizzaComponent } from './order-pizza/order-pizza.component';
import { BuildPizzaComponent } from './build-pizza/build-pizza.component';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderPizzaComponent,
    BuildPizzaComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {path:'',component:HomeComponent},
        {path:'home',component:HomeComponent},
        {path:'orderPizza',component:OrderPizzaComponent},
        {path:'buildPizza',component:BuildPizzaComponent},
        {path:'cart',component:CartComponent}

      ]
    ),
    HttpClientModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
