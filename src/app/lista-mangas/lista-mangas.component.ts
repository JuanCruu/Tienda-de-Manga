import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-mangas',
  templateUrl: './lista-mangas.component.html',
  styleUrls: ['./lista-mangas.component.scss']
})
export class ListaMangasComponent implements OnInit {

  manga={
    id:1,
    nombre:"Naruto",
    descripcion:"Es naruto man",
    genero:[" ","Shonen","Yaoi","Ninjas"],
    precio:60.55,
    paginas:["https://otakuteca.com/images/books/cover/5df322602c2bb.jpg","urlPagina2","urlPagina3","urlPagina4","urlPagina5","urlPagina6","urlPagina7","urlPagina8","urlPagina9","urlPagina10","urlPagina11"],
    comprado:false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
