import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestDeliveryServicePage } from './request-delivery-service.page';

describe('RequestDeliveryServicePage', () => {
  let component: RequestDeliveryServicePage;
  let fixture: ComponentFixture<RequestDeliveryServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDeliveryServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestDeliveryServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
