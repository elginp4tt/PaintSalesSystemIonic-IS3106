import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MixPaintPage } from './mix-paint.page';

describe('MixPaintPage', () => {
  let component: MixPaintPage;
  let fixture: ComponentFixture<MixPaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixPaintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MixPaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
