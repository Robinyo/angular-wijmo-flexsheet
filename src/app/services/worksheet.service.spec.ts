import { TestBed, inject } from '@angular/core/testing';

import { WorksheetService } from './worksheet.service';

describe('WorksheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorksheetService]
    });
  });

  it('should be created', inject([WorksheetService], (service: WorksheetService) => {
    expect(service).toBeTruthy();
  }));
});
