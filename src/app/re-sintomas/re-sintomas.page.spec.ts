import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReSintomasPage } from './re-sintomas.page';

describe('ReSintomasPage', () => {
  let component: ReSintomasPage;
  let fixture: ComponentFixture<ReSintomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReSintomasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReSintomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
