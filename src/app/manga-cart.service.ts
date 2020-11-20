import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Manga } from './lista-mangas/Manga';

@Injectable({
  providedIn: 'root'
})
export class MangaCartService {

  constructor() {
    
   }
  
  private _mangas:Manga[]=[];
  mangas:BehaviorSubject<Manga[]>=new BehaviorSubject(this._mangas);  

  private _carritoManga: Manga[] = [];
  carritoManga: BehaviorSubject<Manga[]> = new BehaviorSubject(this._carritoManga);

  private _MangaComprados: Manga[] = [];
  MangaComprados: BehaviorSubject<Manga[]> = new BehaviorSubject(this._MangaComprados);

  /* ------------------------------------------------------------------------- */
  addToCart(manga: Manga) {
    let item: Manga = this._carritoManga.find((valor1) => valor1.id == manga.id)
    if (!item) {
      this._carritoManga.push({ ...manga })
    }
    this.carritoManga.next(this._carritoManga);

  }
  quitar(manga: Manga) {

    let ubicacion = this._carritoManga.findIndex(item => item.id === manga.id)
    this._carritoManga.splice(ubicacion, 1)

    this.carritoManga.next(this._carritoManga);
  }
  comprar(manga: Manga) {
  
  let item: Manga = this._carritoManga.find((valor1) => valor1.id == manga.id)
  let item2: Manga = this._MangaComprados.find((valor1) => valor1.id == manga.id)
    if (item) {
      this.quitar(manga)
    }
    if (!item2) {
      this._MangaComprados.push({ ...manga })
      this.MangaComprados.next(this._MangaComprados);
      let ubicacion = this._mangas.findIndex(item => item.id === manga.id)
      this._mangas[ubicacion].comprado==true
      this.mangas.next(this._mangas);
    }

  }
  comprarTodo(){

    this._carritoManga.forEach(element => {
    let item2: Manga = this._MangaComprados.find((valor1) => valor1.id == element.id)
      if(!item2){
        this._MangaComprados.push({ ...element })
        let ubicacion = this._mangas.findIndex(item => item.id === element.id)
        this._mangas[ubicacion].comprado=true
        this.mangas.next(this._mangas);
      }
     
    })
    this._carritoManga.length=0;
    this.MangaComprados.next(this._MangaComprados);
    this.carritoManga.next(this._carritoManga);
    console.log(this._MangaComprados)
  }
  addToMangas(mangas:Manga[]){
    for (let manga of mangas) {
      this._mangas.push(manga);
    }
    this.mangas.next(this._mangas);
  }
}
