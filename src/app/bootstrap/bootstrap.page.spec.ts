import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BootstrapPage } from './bootstrap.page';

describe('BootstrapPage', () => {
  let component: BootstrapPage;
  let fixture: ComponentFixture<BootstrapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BootstrapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
