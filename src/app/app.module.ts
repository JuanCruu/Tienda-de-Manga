import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMangasComponent } from './lista-mangas/lista-mangas.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { TiendaAboutComponent } from './tienda-about/tienda-about.component';
import { TiendaMangasComponent } from './tienda-mangas/tienda-mangas.component';
import { BotoneraCompraComponent } from './botonera-compra/botonera-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaMangasComponent,
    CarritoComprasComponent,
    TiendaAboutComponent,
    TiendaMangasComponent,
    BotoneraCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
