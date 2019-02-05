import { Component } from '@angular/core';
import { Producto } from './producto.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arrProductosComida: Producto[]
  arrProductosBebida: Producto[]
  arrPedido: Producto[]

  constructor (){
    this.arrProductosComida=[
    new Producto("Entrecot", 15, "../assets/icons8-filete-480.png"),
    new Producto("Salmon", 18, "../assets/icons8-sashimi-480.png"),
    new Producto("Solomillo", 15, "../assets/icons8-filete-480.png"),
    new Producto("Dorada", 12, "../assets/icons8-pescado-platija-480.png"),
    new Producto("Cordero", 9, "../assets/icons8-costillas-de-cordero-480.png"),
    new Producto("Buey", 30, "../assets/bistec.png"),
    new Producto("Mariscada", 20, "../assets/icons8-mariscos-480.png"),
    new Producto("Bistec", 30, "../assets/bistec.png"),
   
    ]

    this.arrProductosBebida=[
      new Producto("Coca-cola", 2,"../assets/cocacola.png"),
      new Producto("Fanta Naranja", 2, "../assets/icons8-botella-de-soda-naranja-512.png"),
      new Producto("Fanta Limon", 2, "../assets/icons8-botella-de-soda-naranja-512.png"),
      new Producto("Agua", 1.5, "../assets/icons8-botella-de-agua-480.png"),
      new Producto("Ribera del duero", 11, "../assets/icons8-botella-de-vino-480.png"),
      new Producto("Sangria", 7, "../assets/icons8-copa-de-vino-480.png"),
      new Producto("Aquarius", 2, "../assets/icons8-botella-de-soda-naranja-512.png"),
      new Producto("Cerveza", 1.5, "../assets/cerveza.png"),
    ]
    this.arrPedido=[]
    
    

  }
  addProducto($event){ 
    this.arrPedido.push($event)
    console.log(this.arrPedido)
  }
}
