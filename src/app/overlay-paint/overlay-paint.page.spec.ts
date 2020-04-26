import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverlayPaintPage } from './overlay-paint.page';

describe('OverlayPaintPage', () => {
  let component: OverlayPaintPage;
  let fixture: ComponentFixture<OverlayPaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayPaintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverlayPaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
