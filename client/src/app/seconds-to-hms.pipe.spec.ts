import { SecondsToHmsPipe } from './seconds-to-hms.pipe';

describe('SecondsToHmsPipe', () => {
  it('create an instance', () => {
    const pipe = new SecondsToHmsPipe();
    expect(pipe).toBeTruthy();
  });
});
