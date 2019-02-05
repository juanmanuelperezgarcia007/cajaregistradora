import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../producto.model';

@Component({
  selector: 'listaProductos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
   
  @Input () titulo: string
  @Input () Productos: Producto []
  @Output () productoSeleccionado= new EventEmitter ()
   
  constructor() { 
     
    }

  ngOnInit() {
  }

  addProducto(pProd){
   
    this.productoSeleccionado.emit(pProd)
  }
}
