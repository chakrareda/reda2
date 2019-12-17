import { FilterPipe } from '../Filter/filter.pipe';

describe('FilterMailPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
