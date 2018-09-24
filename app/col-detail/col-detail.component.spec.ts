import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColDetailComponent } from './col-detail.component';

describe('ColDetailComponent', () => {
  let component: ColDetailComponent;
  let fixture: ComponentFixture<ColDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
