import { TestBed } from '@angular/core/testing';

import { PaintCategoryService } from './paint-category.service';

describe('PaintCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaintCategoryService = TestBed.get(PaintCategoryService);
    expect(service).toBeTruthy();
  });
});
