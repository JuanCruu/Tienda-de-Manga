import { Component, OnInit } from '@angular/core';
import { MangaCartService } from '../manga-cart.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss']
})
export class CarritoComprasComponent implements OnInit {

  constructor(private cart:MangaCartService) { }

  ngOnInit(): void {
  }
 
}
