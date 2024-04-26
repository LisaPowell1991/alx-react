import { Map } from 'immutable';

// Create Immutable Map
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Modify the value of the indices 2 and 4
export const map2 = map.withMutations((values) => {
  values.set(2, 'Benjamin')
    .set(4, 'Oliver');
});
