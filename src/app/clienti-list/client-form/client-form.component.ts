import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../cliente'
import {ClientsService} from '../../clients.service'
import {ActivatedRoute, Router} from '@angular/router'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit,OnDestroy{
  sesso = ['maschio','femmina'];
  form:FormGroup;
  viewOption:any;
  cf:string;
  cliente:Cliente;
  subscrition: Subscription;
  subscritionForm: Subscription;

  constructor(private cs: ClientsService, private route: ActivatedRoute, private router:Router) { 

  }

  ngOnInit(): void {
    this.viewOption = this.route.snapshot.data['viewOption'];
    if(this.viewOption!=='edit'){
      this.form = new FormGroup({
        'nome': new FormControl(null, Validators.required),
        'cognome': new FormControl(null, Validators.required),
        'nazionalita': new FormControl(null, Validators.required),
        'cf': new FormControl(null),
        'sesso': new FormControl(null, Validators.required),
        'dataNascita': new FormControl(null, [Validators.required,this.ageControl.bind(this)]),
      })
    }
    else{
      this.subscrition=this.route.params.subscribe((params)=>{
        this.cf = params['idCliente']
        this.cliente = this.cs.getClient(this.cf)!;
        //console.log(this.cliente)
        this.form = new FormGroup({
          'nome': new FormControl(this.cliente.nome, Validators.required),
          'cognome': new FormControl(this.cliente.cognome, Validators.required),
          'nazionalita': new FormControl(this.cliente.nazionalita, Validators.required),
          'cf': new FormControl(this.cliente.codiceFiscale),
          'sesso': new FormControl(this.cliente.sesso, Validators.required),
          'dataNascita': new FormControl(this.cliente.dataNascita, [Validators.required,this.ageControl.bind(this)]),
        })
        this.form.controls['cf'].disable();
      }) 
    }


    this.subscritionForm!=this.form.get('nazionalita')?.valueChanges
    .subscribe(value => {
      if(value==='italiano') {
        this.form.get('cf')?.addValidators([Validators.required, Validators.minLength(2)])
        this.form.get('cf')?.updateValueAndValidity();
      }
      else {this.form.get('cf')?.clearValidators();
      this.form.updateValueAndValidity();}
      }
    );
  }

  ngOnDestroy() {
    this.subscrition?.unsubscribe();
    this.subscritionForm?.unsubscribe();
  }

  onSubmit(){
    if(this.viewOption!=='edit'){
      var newCliente = new Cliente(this.form)
      this.cs.addClient(newCliente)
      this.form.reset()
    }
    else{
      var newCliente = new Cliente(this.form)
      console.log(newCliente)
      this.cs.editClient(newCliente)
      this.router.navigate(['route/new'])
    }
  }


  ageControl(control:FormControl){
    let today = new Date().getTime();
    let eighteenYears = 568025136000;
    let dateForm = new Date(control.value).getTime()
    let diff = today - dateForm
    if(diff < eighteenYears)
      return {'ageIsForbidden':true};
    return null
  }

}

