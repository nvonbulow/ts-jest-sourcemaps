import { throwError } from './test/example';

describe('SourceMapping', () => {
  it('returns the correct line number', async () => {
    let error: Error;
    try {
      await throwError();
    }
    catch (e) {
      error = e as Error;
    }
    // Passes if the next line is removed...
    console.log(error);
    expect(error.stack).toContain('example.ts:14:9');
  });
});
