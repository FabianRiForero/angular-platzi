import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {id: '1',name: 'El mejor juguete',price: 565,image: './assets/img/toy.jpg'},
    {id: '1',name: 'Bicicleta casi nueva',price: 356,image: './assets/img/toy.jpg'},
    {id: '1',name: 'Coleccion de albumes',price: 34,image: './assets/img/toy.jpg'},
    {id: '1',name: 'Mis libros',price: 23,image: './assets/img/toy.jpg'},
  ];

  constructor(){}

  ngOnInit(): void {
  }
  
}
