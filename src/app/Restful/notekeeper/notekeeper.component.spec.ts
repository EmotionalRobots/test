import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotekeeperComponent } from './notekeeper.component';

describe('NotekeeperComponent', () => {
  let component: NotekeeperComponent;
  let fixture: ComponentFixture<NotekeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotekeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotekeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
