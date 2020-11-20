import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { observable } from 'rxjs';
import { Manga } from '../lista-mangas/Manga';
import { MangaCartService } from '../manga-cart.service';
@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss']
})
export class VerComponent implements OnInit {
  manga:Manga
/*   manga2:Manga */
  constructor(private route:ActivatedRoute,mangaService:MangaCartService) { 

    mangaService.leerManga.subscribe((observable=>this.manga=observable))
    mangaService.buscaManga(this.getManga())
    /* this.manga2=mangaService.buscarManga(this.getManga()) 
        si se abre de otra forma que no sea un click el objeto es null creo
        
    */
  }

 /*  @Input()
  manga:Manga
 */
  ngOnInit(): void {
    
  }

  getManga():number{
    return +this.route.snapshot.paramMap.get('id');
    
  }

}
