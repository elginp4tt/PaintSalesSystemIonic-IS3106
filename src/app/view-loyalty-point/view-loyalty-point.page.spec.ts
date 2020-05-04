import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewLoyaltyPointPage } from './view-loyalty-point.page';

describe('ViewLoyaltyPointPage', () => {
  let component: ViewLoyaltyPointPage;
  let fixture: ComponentFixture<ViewLoyaltyPointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLoyaltyPointPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewLoyaltyPointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
