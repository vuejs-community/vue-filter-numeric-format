import ava, { TestInterface } from 'ava';
import { INumericFormatConfig, numericFormat } from './numericFormat';

const test = ava as TestInterface<{}>;

const macro = (t, input: number, config: INumericFormatConfig, expected: string) => {
  t.is(numericFormat(input, config), expected);
};

const numericFormatConfig1: INumericFormatConfig = {
  decimalSeparator: ',',
  fractionDigitsMax: 2,
  fractionDigitsMin: 2,
  thousandsDigitsSeparator: ' '
};

const numericFormatConfig2: INumericFormatConfig = {
  ...numericFormatConfig1,
  fractionDigitsMin: 0
};

const numericFormatConfig3: INumericFormatConfig = {
  ...numericFormatConfig1,
  fractionDigitsMax: 0
};

test('1000000 => 1 000 000,00', macro, 1000000, numericFormatConfig1, '1 000 000,00');

test('1000000 => 1 000 000 test fractionDigitsMin = 0', macro, 1000000, numericFormatConfig2, '1 000 000');

test('1000000 => 1 000 000 test fractionDigitsMax = 0', macro, 1000000, numericFormatConfig3, '1 000 000');

test('1000000.01 => 1 000 000,01', macro, 1000000.01, numericFormatConfig1, '1 000 000,01');

test('1000000.67 => 1 000 000,67', macro, 1000000.67, numericFormatConfig1, '1 000 000,67');

test('1000000.001 => 1 000 000,00', macro, 1000000.001, numericFormatConfig1, '1 000 000,00');
