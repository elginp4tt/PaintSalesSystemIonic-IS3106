import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestPaintServicePage } from './request-paint-service.page';

describe('RequestPaintServicePage', () => {
  let component: RequestPaintServicePage;
  let fixture: ComponentFixture<RequestPaintServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPaintServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestPaintServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
