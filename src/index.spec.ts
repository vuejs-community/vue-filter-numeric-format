import { describe, expect, it } from 'vitest';

import { numericFormat } from './index.ts';

describe('numericFormat', () => {
  it('1000000 => 1 000 000,00', () => {
    const numericString = numericFormat(1000000, {
      decimalSeparator: ',',
      fractionDigitsMax: 2,
      fractionDigitsMin: 2,
      thousandsDigitsSeparator: ' '
    });

    expect(numericString).toBe('1 000 000,00');
  });

  it('1000000 => 1 000 000 test fractionDigitsMin = 0', () => {
    const numericString = numericFormat(1000000, {
      decimalSeparator: ',',
      fractionDigitsMax: 2,
      fractionDigitsMin: 0,
      thousandsDigitsSeparator: ' '
    });

    expect(numericString).toBe('1 000 000');
  });

  it('1000000 => 1 000 000 test fractionDigitsMax = 0', () => {
    const numericString = numericFormat(1000000, {
      decimalSeparator: ',',
      fractionDigitsMax: 0,
      fractionDigitsMin: 0,
      thousandsDigitsSeparator: ' '
    });

    expect(numericString).toBe('1 000 000');
  });

  it('1000000.01 => 1 000 000,01', () => {
    const numericString = numericFormat(1000000.01, {
      decimalSeparator: ',',
      fractionDigitsMax: 2,
      fractionDigitsMin: 2,
      thousandsDigitsSeparator: ' '
    });

    expect(numericString).toBe('1 000 000,01');
  });

  it('1000000.67 => 1 000 000,67', () => {
    const numericString = numericFormat(1000000.67, {
      decimalSeparator: ',',
      fractionDigitsMax: 2,
      fractionDigitsMin: 2,
      thousandsDigitsSeparator: ' '
    });

    expect(numericString).toBe('1 000 000,67');
  });

  it('-1000000.67 => -1 000 000,67', () => {
    const numericString = numericFormat(-1000000.67, {
      decimalSeparator: ',',
      fractionDigitsMax: 2,
      fractionDigitsMin: 2,
      thousandsDigitsSeparator: ' '
    });

    expect(numericString).toBe('-1 000 000,67');
  });

  it('1000000.001 => 1 000 000,00', () => {
    const numericString = numericFormat(1000000.001, {
      decimalSeparator: ',',
      fractionDigitsMax: 2,
      fractionDigitsMin: 2,
      thousandsDigitsSeparator: ' '
    });

    expect(numericString).toBe('1 000 000,00');
  });
});
