import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewPaintDetailsPage } from './view-paint-details.page';

describe('ViewPaintDetailsPage', () => {
  let component: ViewPaintDetailsPage;
  let fixture: ComponentFixture<ViewPaintDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPaintDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPaintDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
