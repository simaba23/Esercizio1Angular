import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ClientiListComponent } from './clienti-list/clienti-list.component';
import {ClienteDetailComponent} from './clienti-list/cliente-detail/cliente-detail.component';
import { ClientFormComponent } from './clienti-list/client-form/client-form.component'

import {ClientsService} from './clients.service';
import { FornitoriComponent } from './fornitori/fornitori.component';
import { FornitoriListComponent } from './fornitori/fornitori-list/fornitori-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientiListComponent,
    ClienteDetailComponent,
    ClientFormComponent,
    FornitoriComponent,
    FornitoriListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
