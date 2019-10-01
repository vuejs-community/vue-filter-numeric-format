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

export const numericFormat = (
  input: number,
  config: INumericFormatConfig = {}
): string => {
  config = { ...defaultConfig, ...config };

  const intFragment = input
    .toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${config.thousandsDigitsSeparator}`);

  if (config.fractionDigitsMax === 0) {
    return intFragment;
  }

  const float = parseFloat(`0.${(input.toString().split('.')[1] || '').slice(0, config.fractionDigitsMax)})`);
  const floatFragment = float
    .toString()
    .substring(2)
    .padEnd(config.fractionDigitsMin, '0')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${config.fractionDigitsSeparator}`);

  if (floatFragment.length === 0) {
    return intFragment;
  }

  return `${intFragment}${config.decimalSeparator}${floatFragment}`;
};
