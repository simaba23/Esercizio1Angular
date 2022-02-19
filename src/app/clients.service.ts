import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private clients: Cliente[] = []

  constructor() { }

  getClients(){
    return this.clients;
  }
  getClient(cf:string){
    let client = this.clients.find(i => i.codiceFiscale === cf)
    return client
  }

  addClient(client:Cliente){
    const index = this.clients.findIndex((c: Cliente) => c.codiceFiscale === client.codiceFiscale);
    if(index==-1)
      this.clients.push(client)
    else alert("CF esistente")
  }

  editClient(client:Cliente){
    const index = this.clients.findIndex((c: Cliente) => c.codiceFiscale === client.codiceFiscale);
    this.clients[index] = client;
  }

  removeClient(index:number){
    this.clients.splice(index,1)
  }
}
