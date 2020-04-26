import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewDeliveryServiceDetailsPage } from './view-delivery-service-details.page';

describe('ViewDeliveryServiceDetailsPage', () => {
  let component: ViewDeliveryServiceDetailsPage;
  let fixture: ComponentFixture<ViewDeliveryServiceDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDeliveryServiceDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewDeliveryServiceDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
