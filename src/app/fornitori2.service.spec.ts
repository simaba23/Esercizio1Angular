import { TestBed } from '@angular/core/testing';

import { Fornitori2Service } from './fornitori2.service';

describe('Fornitori2Service', () => {
  let service: Fornitori2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fornitori2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
