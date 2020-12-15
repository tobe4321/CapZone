import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuFootballComponent } from './ecu-football.component';

describe('EcuFootballComponent', () => {
  let component: EcuFootballComponent;
  let fixture: ComponentFixture<EcuFootballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcuFootballComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcuFootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
