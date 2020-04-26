import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestRefundPage } from './request-refund.page';

describe('RequestRefundPage', () => {
  let component: RequestRefundPage;
  let fixture: ComponentFixture<RequestRefundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestRefundPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestRefundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
