import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterPaintsByTagsModalPage } from './filter-paints-by-tags-modal.page';

describe('FilterPaintsByTagsModalPage', () => {
  let component: FilterPaintsByTagsModalPage;
  let fixture: ComponentFixture<FilterPaintsByTagsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPaintsByTagsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterPaintsByTagsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
