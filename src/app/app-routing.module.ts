import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { TiendaAboutComponent } from './tienda-about/tienda-about.component';
import { TiendaMangasComponent } from './tienda-mangas/tienda-mangas.component';
import {BibliotecaComponent } from './biblioteca/biblioteca.component';
import { VerComponent } from './ver/ver.component'

const routes: Routes = [
  {
    path:'',redirectTo :'mangas',pathMatch:'full'
  },
  {
    path:'mangas',component:TiendaMangasComponent
  },
  {
    path:'about',component:TiendaAboutComponent
  }, 
  {
    path:'Biblioteca',component:BibliotecaComponent
  },
  {
    path:'Ver/:id',component:VerComponent
  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
