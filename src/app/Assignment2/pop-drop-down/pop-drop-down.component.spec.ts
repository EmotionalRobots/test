import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopDropDownComponent } from './pop-drop-down.component';

describe('PopDropDownComponent', () => {
  let component: PopDropDownComponent;
  let fixture: ComponentFixture<PopDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
