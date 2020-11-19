import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Manga } from '../lista-mangas/Manga';
import { MangaCartService } from '../manga-cart.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss']
})
export class CarritoComprasComponent implements OnInit {

  carritoManga$:Observable<Manga[]>;

  constructor(private cart:MangaCartService) { 
    
    this.carritoManga$=cart.carritoManga.asObservable();

  }
 
  quitar(manga:Manga){
    this.cart.quitar(manga)
  }
  comprarTodo(){
    this.cart.comprarTodo()
  }
  ngOnInit(): void {
  }
 
}
