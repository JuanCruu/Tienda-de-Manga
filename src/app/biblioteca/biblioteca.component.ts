import { Component, OnInit } from '@angular/core';
import { Manga } from '../lista-mangas/Manga';
import { MangaCartService } from '../manga-cart.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {

  public mangasComprados:Manga[] = [];
  constructor(private mangaService:MangaCartService) { 

    mangaService.MangaComprados.subscribe((observable) => this.mangasComprados = observable);
  }

  ngOnInit(): void {
  }

}
