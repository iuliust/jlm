/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChapitreService } from './chapitre.service';

describe('Service: Chapitre', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChapitreService]
    });
  });

  it('should ...', inject([ChapitreService], (service: ChapitreService) => {
    expect(service).toBeTruthy();
  }));
});
