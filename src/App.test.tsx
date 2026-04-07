import React from 'react';
import { render } from '@testing-library/react';
import { expect } from '@jest/globals';
import App from './App';

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});
