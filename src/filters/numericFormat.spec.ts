import ava, { TestInterface } from 'ava';
import { INumericFormatConfig, numericFormat } from './numericFormat';

const test = ava as TestInterface<{}>;

const macro = (t, input: number, config: INumericFormatConfig, expected: string) => {
  t.is(numericFormat(input, config), expected);
};

const numericFormatConfig: INumericFormatConfig = {
  decimalSeparator: ',',
  fractionDigitsMax: 2,
  fractionDigitsMin: 2,
  thousandsDigitsSeparator: ' '
};

test('1000000 => 1 000 000,00', macro, 1000000, numericFormatConfig, '1 000 000,00');

test('1000000.01 => 1 000 000,01', macro, 1000000.01, numericFormatConfig, '1 000 000,01');

test('1000000.67 => 1 000 000,67', macro, 1000000.67, numericFormatConfig, '1 000 000,67');

test('1000000.001 => 1 000 000,00', macro, 1000000.001, numericFormatConfig, '1 000 000,00');
