import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { LaboratoriosService } from './laboratorios.service';

describe('LaboratoriosService', () => {
  let service: LaboratoriosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LaboratoriosService]
    });
    service = TestBed.inject(LaboratoriosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
