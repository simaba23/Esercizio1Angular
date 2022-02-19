import { Injectable } from '@angular/core';
import { Fornitore } from './fornitore';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornitoriService {
  private fornitoriList: Fornitore[] = [];

  constructor() { }

  private cloneFornitoriArray() {
    return JSON.parse(JSON.stringify(this.fornitoriList));
  }

  getFornitori(): Observable<Fornitore[]> {
    return of(this.cloneFornitoriArray());
  }

  updateFornitore(fornitoriList: Fornitore): Observable<Fornitore[]> {
    const idx = this.fornitoriList.findIndex((f: Fornitore) => f.nome === fornitoriList.nome);
    this.fornitoriList[idx] = fornitoriList;
    return of(this.cloneFornitoriArray());
  }

  addFornitore(f:Fornitore): Observable<Fornitore[]> {
    this.fornitoriList.push(f);

    return of(this.cloneFornitoriArray());
  }


}
