import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Manga } from './lista-mangas/Manga';

@Injectable({
  providedIn: 'root'
})
export class MangaCartService {

  constructor() {
    
   }
  

 /*  private _mangas:Manga[]=[
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
      genero:[" ","Ciencia ficcion","recuerdos de la vida"],
      precio:170.55,
      paginas:["https://otakuteca.com/images/books/cover/5df9321aaa2e4.jpg","pagina 2"],
      comprado:false,
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
      nombre:"I am a Hero" ,
      descripcion:"Hideo Suzuki es un mediocre mangaka de treinta y cinco años que trabaja actualmente como asistente, y que trata desesperadamente de convertirse en el héroe de su propia vida lanzando un manga de éxito, al tiempo que intenta que vaya bien su relación con su novia y que las alucinaciones que sufre al caer la noche no le hagan perder la cabeza. Con el dinero que puede ganar con el manga, quiere comprar una casa para vivir con su novia. Sin embargo, él no se da cuenta de los inicios de una epidemia que convierte a las personas en monstruos sedientos de sangre. Mientras que la infección se está extendiendo a través de Japón, tal vez incluso del mundo, Hideo intenta sobrevivir a la epidemia y ayudar en la destrucción de la sociedad japonesa que ahora es una horda de infectados y los supervivientes que quedan en su mayoría han abandonado toda humanidad.",
      genero:[" ","drama","horror","psicologico","accion","misterio","sobrenatural"],
      precio: 254,
      paginas: ["https://otakuteca.com/images/books/cover/6102_TMOmanga091102.jpg","pagina 2"],
      comprado:false,
      oferta:false,
    }
    ,
    {
      id: 5,
      nombre:"Dragon Ball" ,
      descripcion:"Son Goku, es un niño muy especial que ha tenido que valerse por sí mismo en medio de la naturaleza y sin contacto con otras personas. Un día conoció a Bulma, una chica que busca las siete Esferas del Dragón, estos son elementos mágicos que al ser reunidos invocan a un dios dragón llamado Shenlong, el cual concederá un único deseo, cualquiera que este sea. Goku se une a Bulma en la búsqueda de las esferas sin imaginar que hay otros seres muy peligrosos que también las desean.",
      genero:[" ","Accion","Artes Marciales","Aventura","Comedia","Fantasia","Ciencia Ficcion"],
      precio: 74,
      paginas: ["https://otakuteca.com/images/books/cover/5bc9016f3c3a2.jpg","pagina 2"],
      comprado:false,
      oferta:true,
    },
    {
      id:6 ,
      nombre:"Akira" ,
      descripcion:"En el año 2030, 38 años después de la III Guerra Mundial. Sobre las ruinas de Tokio se alza la metrópolis de Neo-Tokio, una ciudad opresiva e inhumana donde la violencia, el terrorismo y la droga son problemas cotidianos. Las sectas religiosas y los grupos extremistas, aprovechándose de la insatisfacción de los ciudadanos, cultivan el mito de AKIRA, un 'niño cobaya' depositario de la 'energía absoluta' cuya resurrección significaría para Japón el amanecer de una nueva era. El gobierno experimenta sobre niños con poderes psíquicos para represar la ciudad. Mientras la historia se centra en dos motociclistas callejeros, Kaneda y Tetsuo, muy buenos amigos que, cuando Tetsuo sufre un choque contra un niño psíquico en una pelea de bandas, obtiene poderes que poco a poco se incrementan, provocándole alucinaciones y poderes paranormales increíbles. Mientras Tetsuo Libera caos en la ciudad y descontrol total para demostrar sus poderes creyéndose un Dios, Kaneda lo intenta detener antes que sea ",
      genero:[" ","Accion","Sobrenatural","Cyberpunk","Apocaliptico","Ciencia Ficcion"],
      precio: 74,
      paginas: ["https://otakuteca.com/images/books/cover/9887_TMOmanga094046.jpg","pagina 2"],
      comprado:false,
      oferta:false,
    },
    {
      id:7 ,
      nombre:"One Punch Man" ,
      descripcion:"¡Sigue la vida de un héroe promedio que gana todas sus peleas con un solo puño! Esto le causa un montón de frustración, ahora ya no siente la adrenalina y la emoción de una dura pelea. Tal vez ese riguroso entrenamiento para volverse fuerte no valió la pena. Después de todo, ¿qué tiene de bueno tener un poder tan aplastante?",
      genero:[" ","Accion","Superpoderes","Comedia","Ciencia Ficcion","Sobrenatural"],
      precio: 74,
      paginas: ["https://otakuteca.com/images/books/cover/5bc7cc1d2cf73.jpg","pagina 2"],
      comprado:false,
      oferta:false,
    },
    {
      id:8 ,
      nombre:"Parasyte: The Maxim" ,
      descripcion:"Shinichi Izumi vive con su madre y su padre en un barrio bastante tranquilo, una noche, se produce una invasión extraterrestre Los seres son llamados parásitos. Se trata de gusanos que entran en los seres humanos a los que llaman 'hosts' a través de sus orejas o la nariz, haciéndose cargo de sus cerebros Uno de ellos intentó entrar por la oreja de Shinichi para así tomar su cerebro mientras dormía ,sin embargo, es detenido y queda en su mano derecha Debido a que el parasito Migi infectó su mano en lugar de su cerebro, Shinichi puede conservar su propio intelecto. Esto les da una ventaja en la lucha contra los otros parásitos, por lo que es visto como una amenaza Shinichi se siente obligado a luchar contra otros parásitos por matar seres humanos como fuente de alimento.",
      genero:[" ","Accion","Superpoderes","Ciencia Ficcion","Sobrenatural","Psicologico","Horror","Drama"],
      precio: 100,
      paginas: ["https://otakuteca.com/images/books/cover/5c4e4a339cd91.jpg","pagina 2"],
      comprado:false,
      oferta:false,
    },
    {
      id:9 ,
      nombre:"Tokyo Ghoul" ,
      descripcion:"Al acecho en las sombras de Tokio hay seres atemorizantes conocidos como 'ghouls', que satisfacen su hambre alimentándose de humanos una vez que cae la noche. Se ha establecido una organización conocida como la Comisión de Contramedidas Ghoul (CCG) en respuesta a los constantes ataques a los ciudadanos y como un medio para purgar a estas criaturas. Sin embargo, el problema radica en identificar a los ghouls, ya que se disfrazan de humanos y viven entre las masas para que sea más fácil cazar presas. Ken Kaneki, un estudiante de primer año universitario desprevenido, se encuentra atrapado en un mundo entre humanos y ghouls cuando su cita resulta ser un ghoul después de comer su carne.Apenas sobreviviendo a este encuentro después de ser llevado a un hospital, descubre que se ha convertido en un medio ghoul como resultado de la cirugía que recibió. Incapaz de satisfacer su ansia intensa de carne humana por medios convencionales, Kaneki es acogido por amistosos ghouls que dirigen una cafetería para ayudarlo con su transición. Cuando comienza lo que cree que será una nueva vida pacífica, poco sabe que está a punto de encontrarse en el centro de una guerra entre sus nuevos camaradas y las fuerzas del CCG, y que su nueva existencia ha llamado la atención de ghouls por todo Tokio.",
      genero:[" ","Accion","Sobrenatural","Psicologico","Horror","Drama","Gore","Thriller"],
      precio: 150,
      paginas: ["https://otakuteca.com/images/books/cover/5dbbb802c88ce.jpg","pagina 2"],
      comprado:false,
      oferta:false,
    },
    {
      id:10 ,
      nombre:"Ghost in the Shell Arise" ,
      descripcion:"El presunto responsable de siete atentados con bomba por todo el mundo se encuentra en la lista de la CIA de los terroristas más buscados. Han aparecido imágenes de su entrada de incógnito a Japón. Las cámaras de seguridad lo grabaron comprando glicerina para uso industrial en el mercado negro. Después de eso, su rastro se pierde ¡Averiguar el paradero del criminal tiene prioridad absoluta! Pero cuando Batou descubra que el sospechoso es un antiguo compañero de armas, el caso se complicará más de lo esperado. Esto le retrotraerá al momento en el que, siendo todavía un ranger, conoció a la Mayor Motoko Kusanagi.",
      genero:[" ","Accion","Psicologico","Policiaco","Militar","Drama","Gore","Cyberpunk"],
      precio: 150,
      paginas: ["https://otakuteca.com/images/books/cover/30181_TMOManga59a057d42d48d.jpg","pagina 2"],
      comprado:false,
      oferta:false,
    },
    {
      id:11 ,
      nombre:"Neon Genesis Evangelion" ,
      descripcion:"En el año 2015 la humanidad intenta recuperarse del “Segundo impacto”, una catástrofe provocada por la caída de un meteorito en la Antártida años atrás. Tras sobrevivir al deshielo de los polos y a una inmediata sucesión de guerras sin fin, los seres humanos deben enfrentarse a un nuevo y mortal peligro. Unos misteriosos seres denominados Ángeles aparecen de improvisto llevando la destrucción por donde pasan. Para frenar esta amenaza, el científico Gendo Ikari ha desarrollado los Evangelion, gigantescos robots que se convierten en la última línea de defensa para la humanidad. Uno de los primeros pilotos escogidos recibe el nombre de “Tercer Elegido”. Shinji Ikari, hijo que Gendo abandonó, se verá obligado a sondear las profundidades de sus propios recursos internos y así encontrar el valor y la fuerza, no sólo para luchar… sino para sobrevivir o arriesgarse a perderlo todo.",
      genero:[" ","Accion","Psicologico","Ciencia Ficcion","Drama","Tragedia","Mecha"],
      precio: 150,
      paginas: ["https://otakuteca.com/images/books/cover/5e7fce2c667b0.jpg","pagina 2"],
      comprado:false,
      oferta:false,
    }
  ];
  esto fallo 
  mangas:BehaviorSubject<Manga[]>=new BehaviorSubject(this._mangas); */
  /* ----------------------------------------------------------------------- */

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
    }
  }
  comprarTodo(){

    this._carritoManga.forEach(element => {
    let item2: Manga = this._MangaComprados.find((valor1) => valor1.id == element.id)
      if(!item2){
        this._MangaComprados.push({ ...element })
      }
     
    })
    this._carritoManga.length=0;
    this.MangaComprados.next(this._MangaComprados);
    this.carritoManga.next(this._carritoManga);
    console.log(this._MangaComprados)
  }

}
