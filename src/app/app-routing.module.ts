import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiendaAboutComponent } from './tienda-about/tienda-about.component';
import { TiendaMangasComponent } from './tienda-mangas/tienda-mangas.component';

const routes: Routes = [
  {
    path:'',redirectTo :'mangas',pathMatch:'full'
  },
  {
    path:'mangas',component:TiendaMangasComponent
  },
  {
    path:'about',component:TiendaAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
