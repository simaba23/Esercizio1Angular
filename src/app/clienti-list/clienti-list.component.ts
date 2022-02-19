import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Cliente } from '../cliente'
import {ClientsService} from '../clients.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-clienti-list',
  templateUrl: './clienti-list.component.html',
  styleUrls: ['./clienti-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientiListComponent implements OnInit {
  clienti: Cliente[];
  
  constructor(public cs: ClientsService, private router:Router) { }

  ngOnInit(): void {
    this.clienti=this.cs.getClients();
    console.log(this.clienti)
  }

  removeClient(index:number){
    this.cs.removeClient(index);
    this.router.navigate(['route/new'])
  }

}
