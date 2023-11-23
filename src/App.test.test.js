import { getTitle } from './components/card/helpers';

test('returns the correct title for "plants"', () => {
  const result = getTitle('plants');
  expect(result).toBe('This product plants');
});
