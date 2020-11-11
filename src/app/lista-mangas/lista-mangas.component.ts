import { Component, OnInit } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { Manga } from './Manga';

@Component({
  selector: 'app-lista-mangas',
  templateUrl: './lista-mangas.component.html',
  styleUrls: ['./lista-mangas.component.scss']
})
export class ListaMangasComponent implements OnInit {

  mangas:Manga[]=[
  {
    id:1,
    nombre:"no es Naruto",
    descripcion:"Es naruto man",
    genero:[" ","Shonen","Accion","Ninjas"],
    precio:60.55,
    paginas:["https://otakuteca.com/images/books/cover/5df322602c2bb.jpg","urlPagina2","urlPagina3","urlPagina4","urlPagina5","urlPagina6","urlPagina7","urlPagina8","urlPagina9","urlPagina10","urlPagina11"],
    comprado:false,
    oferta:true,
  },
  {
    id:2,
    nombre:"Blame",
    descripcion:"adwdadd",
    genero:[" ","ciencia ficcion","recuerdos de la vida"],
    precio:170.55,
    paginas:["https://otakuteca.com/images/books/cover/5df9321aaa2e4.jpg","pagina 2"],
    comprado:true,
    oferta:false,
  },
  {
    id:3,
    nombre:"Goblin Slayer",
    descripcion:"Una joven sacerdotisa ha formado su primer grupo de aventureros, pero casi inmediatamente ellos se encuentran en apuros por los goblins. Es el Goblin Slayer quien viene a su rescate - un hombre que ha dedicado su vida a la exterminación de todos los goblins, bajo por cualquier medio necesario.",
    genero:[" ","accion","echi","fantasia","gore","horror"] ,
    precio: 44,
    paginas: ["https://otakuteca.com/images/books/cover/5d22c4aabc9ad.jpg","imagen 2"],
    comprado:false,
    oferta:true
  },
  {
    id: 4,
    nombre:"i am a hero" ,
    descripcion:"Hideo Suzuki es un mediocre mangaka de treinta y cinco años que trabaja actualmente como asistente, y que trata desesperadamente de convertirse en el héroe de su propia vida lanzando un manga de éxito, al tiempo que intenta que vaya bien su relación con su novia y que las alucinaciones que sufre al caer la noche no le hagan perder la cabeza. Con el dinero que puede ganar con el manga, quiere comprar una casa para vivir con su novia. Sin embargo, él no se da cuenta de los inicios de una epidemia que convierte a las personas en monstruos sedientos de sangre. Mientras que la infección se está extendiendo a través de Japón, tal vez incluso del mundo, Hideo intenta sobrevivir a la epidemia y ayudar en la destrucción de la sociedad japonesa que ahora es una horda de infectados y los supervivientes que quedan en su mayoría han abandonado toda humanidad.",
    genero:[" ","drama","horror","psicologico","accion","misterio","sobrenatural"],
    precio: 254,
    paginas: ["https://otakuteca.com/images/books/cover/6102_TMOmanga091102.jpg","pagina 2"],
    comprado:false,
    oferta:false,
  }

]
  constructor() { }

  ngOnInit(): void {
  }

}
