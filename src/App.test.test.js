import { render, screen } from '@testing-library/react';
import App from './App';
import { getTitle } from './components/card/helpers';

test('returns the correct title for "plants"', () => {
  const result = getTitle('plants');
  expect(result).toBe('This product plants');
});

test('returns the correct title for "offsets"', () => {
  const result = getTitle('offsets');
  expect(result).toBe('This product offsets');
});

test('returns the correct title for "collects"', () => {
  const result = getTitle('collects');
  expect(result).toBe('This product collects');
});

test('returns the default title for unknown actions', () => {
  const result = getTitle('unknown-action');
  expect(result).toBe('This product helps you');
});
