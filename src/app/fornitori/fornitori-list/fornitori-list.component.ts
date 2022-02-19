import { Component, OnInit, Input , ChangeDetectionStrategy} from '@angular/core';
import {Fornitore} from '../../fornitore';

@Component({
  selector: 'app-fornitori-list',
  templateUrl: './fornitori-list.component.html',
  styleUrls: ['./fornitori-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FornitoriListComponent implements OnInit {
  @Input() fornitoriList: Fornitore[];

  constructor() { }

  ngOnInit(): void {
  }

}
