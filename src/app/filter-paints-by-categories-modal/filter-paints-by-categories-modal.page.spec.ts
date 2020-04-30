import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterPaintsByCategoriesModalPage } from './filter-paints-by-categories-modal.page';

describe('FilterPaintsByCategoriesModalPage', () => {
  let component: FilterPaintsByCategoriesModalPage;
  let fixture: ComponentFixture<FilterPaintsByCategoriesModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPaintsByCategoriesModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterPaintsByCategoriesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
