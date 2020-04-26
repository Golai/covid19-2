import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReVisitaPage } from './re-visita.page';

describe('ReVisitaPage', () => {
  let component: ReVisitaPage;
  let fixture: ComponentFixture<ReVisitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReVisitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReVisitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
