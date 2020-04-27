import { TestBed } from '@angular/core/testing';

import { PaintServiceService } from './paint-service.service';

describe('PaintServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaintServiceService = TestBed.get(PaintServiceService);
    expect(service).toBeTruthy();
  });
});
