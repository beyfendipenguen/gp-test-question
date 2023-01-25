import { TestBed } from '@angular/core/testing';

import { GpTestQuestionService } from './gp-test-question.service';

describe('GpTestQuestionService', () => {
  let service: GpTestQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpTestQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
