import { Component, OnInit} from '@angular/core';
import {Fornitore} from '../fornitore'
import {FornitoriService} from '../fornitori.service';
import {Fornitori2Service} from '../fornitori2.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fornitori',
  templateUrl: './fornitori.component.html',
  styleUrls: ['./fornitori.component.css']
})
export class FornitoriComponent implements OnInit {
  private subscription: Subscription;
  fornitoriList: Fornitore[];
  form:FormGroup;
  
  constructor(private fs:FornitoriService) { 
    this.form = new FormGroup({
      'nome': new FormControl(null, Validators.required),
      'nazionalita': new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
    this.subscription = this.fs.getFornitori().subscribe((fList: Fornitore[]) => {
      this.fornitoriList = fList;
    });
  }

  onSubmit(){
    var newFornitore = new Fornitore(this.form.get('nome')?.value,this.form.get('nazionalita')?.value)
    this.fs.addFornitore(newFornitore).subscribe((f: Fornitore[]) => this.fornitoriList = f);
    this.form.reset()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
