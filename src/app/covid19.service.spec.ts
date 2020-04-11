import { TestBed, inject } from '@angular/core/testing';

import { Covid19Service } from './covid19.service';

describe('Covid19Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Covid19Service]
    });
  });

  it('should be created', inject([Covid19Service], (service: Covid19Service) => {
    expect(service).toBeTruthy();
  }));
});
