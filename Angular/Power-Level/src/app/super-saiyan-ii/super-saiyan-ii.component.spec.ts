import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanIiComponent } from './super-saiyan-ii.component';

describe('SuperSaiyanIiComponent', () => {
  let component: SuperSaiyanIiComponent;
  let fixture: ComponentFixture<SuperSaiyanIiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanIiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
