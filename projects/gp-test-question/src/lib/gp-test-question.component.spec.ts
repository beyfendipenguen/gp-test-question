import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpTestQuestionComponent } from './gp-test-question.component';

describe('GpTestQuestionComponent', () => {
  let component: GpTestQuestionComponent;
  let fixture: ComponentFixture<GpTestQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpTestQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpTestQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
