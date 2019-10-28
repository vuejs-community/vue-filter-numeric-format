export interface INumericFormatConfig {
  decimalSeparator?: string;
  fractionDigitsMax?: number;
  fractionDigitsMin?: number;
  fractionDigitsSeparator?: string;
  thousandsDigitsSeparator?: string;
}

const defaultConfig: INumericFormatConfig = {
  decimalSeparator: ',',
  fractionDigitsMax: 2,
  fractionDigitsMin: 2,
  fractionDigitsSeparator: '',
  thousandsDigitsSeparator: ' '
};

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
  config = { ...defaultConfig, ...config };

  const intFragment = getIntFragment(input, config.thousandsDigitsSeparator);

  if (config.fractionDigitsMax === 0) {
    return intFragment;
  }

  const floatFragment = getFloatFragment(input, config.fractionDigitsSeparator, config.fractionDigitsMin, config.fractionDigitsMax);
  if (floatFragment.length === 0) {
    return intFragment;
  }

  return `${intFragment}${config.decimalSeparator}${floatFragment}`;
};
