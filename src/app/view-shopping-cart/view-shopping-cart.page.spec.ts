import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewShoppingCartPage } from './view-shopping-cart.page';

describe('ViewShoppingCartPage', () => {
  let component: ViewShoppingCartPage;
  let fixture: ComponentFixture<ViewShoppingCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShoppingCartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewShoppingCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
