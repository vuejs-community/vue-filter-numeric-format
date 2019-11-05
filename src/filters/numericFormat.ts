export interface INumericFormatConfig {
  decimalSeparator?: string;
  fractionDigitsMax?: number;
  fractionDigitsMin?: number;
  fractionDigitsSeparator?: string;
  thousandsDigitsSeparator?: string;
}

const getIntFragment = (input: number, separator: string): string => {
  return Math
    .floor(input)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${separator}`);
};

const getFloatFragment = (input: number, separator: string, min: number, max: number): string => {
  const float = parseFloat(`0.${(input.toString().split('.')[1] || '').slice(0, max)})`);

  return float
    .toString()
    .substring(2)
    .padEnd(min, '0')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${separator}`);
};

export const numericFormat = (input: number, config: INumericFormatConfig = {}): string => {
  const {
    decimalSeparator = ',',
    fractionDigitsMax = 2,
    fractionDigitsMin = 2,
    fractionDigitsSeparator = '',
    thousandsDigitsSeparator = ' '
  } = config;

  const intFragment = getIntFragment(input, thousandsDigitsSeparator);

  if (fractionDigitsMax === 0) {
    return intFragment;
  }

  const floatFragment = getFloatFragment(input, fractionDigitsSeparator, fractionDigitsMin, fractionDigitsMax);
  if (floatFragment.length === 0) {
    return intFragment;
  }

  return `${intFragment}${decimalSeparator}${floatFragment}`;
};
