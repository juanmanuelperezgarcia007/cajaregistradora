import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../producto.model';

@Component({
  selector: 'pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  @Input () pedido: Producto[]
  constructor() { }

  ngOnInit() {
    
  }
 sumaTotal(){
   let total=0
   for (let i=0; i<this.pedido.length;i++){
     total += this.pedido[i].precio
   }
   return total
 }
}
