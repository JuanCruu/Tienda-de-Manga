import { Injectable } from '@angular/core';
import { Manga } from './lista-mangas/Manga';

@Injectable({
  providedIn: 'root'
})
export class MangaCartService {
  
  constructor() { }

  carritoManga:Manga[]=[]

  addToCart(manga: Manga) {
    let item:Manga = this.carritoManga.find((valor1)=>valor1.id==manga.id)
    if(!item){
      this.carritoManga.push({...manga})
    }

  }

}
