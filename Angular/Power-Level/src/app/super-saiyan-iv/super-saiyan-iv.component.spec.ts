import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanIvComponent } from './super-saiyan-iv.component';

describe('SuperSaiyanIvComponent', () => {
  let component: SuperSaiyanIvComponent;
  let fixture: ComponentFixture<SuperSaiyanIvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanIvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
