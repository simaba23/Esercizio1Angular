import { Component, OnInit, OnDestroy} from '@angular/core';
import { Cliente } from 'src/app/cliente';
import {ActivatedRoute} from '@angular/router'
import {ClientsService} from '../../clients.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit, OnDestroy  {
  cf: string;
  cliente: Cliente;
  subscrition: Subscription;

  constructor(private route:ActivatedRoute, private cs:ClientsService) { }

  ngOnInit(): void {
    this.subscrition=this.route.params.subscribe((params)=>{
      this.cf = params['idCliente']
      this.cliente = this.cs.getClient(this.cf)!;
      console.log(this.cliente)
    })  
  }

  ngOnDestroy() {
    this.subscrition.unsubscribe();
  }

}
