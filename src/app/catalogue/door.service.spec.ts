import { TestBed } from '@angular/core/testing';

import { DoorDataService } from './door-data.service';

describe('DoorService', () => {
  let service: DoorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
