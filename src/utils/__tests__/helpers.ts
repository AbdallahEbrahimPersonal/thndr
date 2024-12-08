import {identity} from '../helpers';

describe('helpers > identity', () => {
  it('Should return the same value', () => {
    expect(identity(1)).toBe(1);
  });
});
