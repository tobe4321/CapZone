import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreviewComponent } from './scoreview.component';

describe('ScoreviewComponent', () => {
  let component: ScoreviewComponent;
  let fixture: ComponentFixture<ScoreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
