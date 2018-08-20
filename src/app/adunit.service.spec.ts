import { TestBed, inject } from '@angular/core/testing';

import { AdunitService } from './adunit.service';

import { HttpClientModule } from '@angular/common/http';

describe('AdunitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdunitService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([AdunitService], (service: AdunitService) => {
    expect(service).toBeTruthy();
  }));
});
