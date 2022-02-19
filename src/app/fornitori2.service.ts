import { Injectable } from '@angular/core';
import { Fornitore } from './fornitore';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Fornitori2Service {
  private fornitoriList: Fornitore[] = [];

  constructor() { }

  getFornitori(): Observable<Fornitore[]> {
    return of(this.fornitoriList);
  }

  updateFornitore(fornitoriList: Fornitore): Observable<Fornitore[]> {
    const idx = this.fornitoriList.findIndex((f: Fornitore) => f.nome === fornitoriList.nome);
    this.fornitoriList[idx] = fornitoriList;
    return of(this.fornitoriList);
  }

  addFornitore(f:Fornitore): Observable<Fornitore[]> {
    this.fornitoriList.push(/*{
      nome: 'asd',
      nazionalita: 'dasd'
    }*/
      f
    );

    return of(this.fornitoriList);
  }


}
