import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Manga } from '../lista-mangas/Manga';
import { MangaCartService } from '../manga-cart.service';

@Component({
  selector: 'app-botonera-compra',
  templateUrl: './botonera-compra.component.html',
  styleUrls: ['./botonera-compra.component.scss']
})
export class BotoneraCompraComponent implements OnInit {
 

  constructor( private cart:MangaCartService) { 
  }

  @Input()
    comprado:boolean
  @Input()
    manga:Manga
  @Output()
    compradoChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
  }
  
  addToCart(manga:Manga):void{
    this.cart.addToCart(manga)
  }

  comprar(comprado):void{
    if(!comprado){
      this.comprado=true
      this.compradoChange.emit(this.comprado)
    }
  }
}
