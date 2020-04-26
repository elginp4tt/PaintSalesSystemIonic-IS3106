import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewAllTransactionsPage } from './view-all-transactions.page';

describe('ViewAllTransactionsPage', () => {
  let component: ViewAllTransactionsPage;
  let fixture: ComponentFixture<ViewAllTransactionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllTransactionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAllTransactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
