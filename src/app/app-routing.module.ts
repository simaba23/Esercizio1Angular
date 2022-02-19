import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientFormComponent} from './clienti-list/client-form/client-form.component'
import {ClientiListComponent} from './clienti-list/clienti-list.component'
import {ClienteDetailComponent} from './clienti-list/cliente-detail/cliente-detail.component'

const routes: Routes = [
  {
    path: '', redirectTo: 'route/new', pathMatch:'full'
  },
  {
    path: 'route', component:ClientiListComponent, children:[
      {path: 'new', component:ClientFormComponent},
      {path: ':idCliente', component:ClienteDetailComponent},
      {path: ':idCliente/edit', component:ClientFormComponent, data: { viewOption: 'edit' }}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
