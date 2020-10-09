import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMangasComponent } from './lista-mangas/lista-mangas.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaMangasComponent,
    CarritoComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
