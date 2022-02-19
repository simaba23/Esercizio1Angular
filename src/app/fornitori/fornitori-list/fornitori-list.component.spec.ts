import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornitoriListComponent } from './fornitori-list.component';

describe('FornitoriListComponent', () => {
  let component: FornitoriListComponent;
  let fixture: ComponentFixture<FornitoriListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornitoriListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FornitoriListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
