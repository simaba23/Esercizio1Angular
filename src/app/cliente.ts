import { FormGroup } from '@angular/forms';

export class Cliente {
    nome : string;
    cognome : string;
    nazionalita : string;
    codiceFiscale : string ='';
    sesso : string;
    dataNascita : string;
  
    constructor(f:FormGroup){
        this.nome = f.get('nome')?.value
        this.cognome = f.get('cognome')?.value
        this.nazionalita = f.get('nazionalita')?.value
        this.codiceFiscale = f.get('cf')?.value
        this.sesso = f.get('sesso')?.value
        this.dataNascita = f.get('dataNascita')?.value
    }

    /*constructor(nome:string,cognome:string,nazionalita:string,cf:string,sesso:string,dn:string){
        this.nome = nome
        this.cognome = cognome
        this.nazionalita = nazionalita
        this.codiceFiscale=cf
        this.sesso = sesso
        this.dataNascita= dn
    }*/
  }