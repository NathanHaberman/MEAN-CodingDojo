import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanIiiComponent } from './super-saiyan-iii.component';

describe('SuperSaiyanIiiComponent', () => {
  let component: SuperSaiyanIiiComponent;
  let fixture: ComponentFixture<SuperSaiyanIiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanIiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
