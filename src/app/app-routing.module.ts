import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

const routes: Routes = [
  {component:IndexComponent,path:''},
  {component:DetalleProductoComponent,path:'detalle/:idprod'},
  {component:EditarProductoComponent,path:'edit/:idprod'},
  {component:CrearProductoComponent,path:'create'}
  // {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
