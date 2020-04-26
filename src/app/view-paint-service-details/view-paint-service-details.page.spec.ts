import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewPaintServiceDetailsPage } from './view-paint-service-details.page';

describe('ViewPaintServiceDetailsPage', () => {
  let component: ViewPaintServiceDetailsPage;
  let fixture: ComponentFixture<ViewPaintServiceDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPaintServiceDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPaintServiceDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
