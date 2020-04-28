import { TestBed } from '@angular/core/testing';

import { VerifyotpService } from './verifyotp.service';

describe('VerifyotpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerifyotpService = TestBed.get(VerifyotpService);
    expect(service).toBeTruthy();
  });
});
