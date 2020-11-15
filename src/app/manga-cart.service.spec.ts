import { TestBed } from '@angular/core/testing';

import { MangaCartService } from './manga-cart.service';

describe('MangaCartService', () => {
  let service: MangaCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
