import { VueConstructor } from 'vue';

import { version } from '../package.json';

export interface INumericFormatConfig {
  decimalSeparator?: string;
  fractionDigitsMax?: number;
  fractionDigitsMin?: number;
  fractionDigitsSeparator?: string;
  thousandsDigitsSeparator?: string;
}

function getIntFragment(input: number, separator: string): string {
  return Math
    .trunc(input)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${separator}`);
}

function getFloatFragment(input: number, separator: string, min: number, max: number): string {
  const float = parseFloat(`0.${(input.toString().split('.')[1] || '').slice(0, max)})`);

  return float
    .toString()
    .substring(2)
    .padEnd(min, '0')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${separator}`);
}

export function numericFormat(input: number, config: INumericFormatConfig = {}): string {
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
}

export default {
  install(Vue: VueConstructor, baseConfig: INumericFormatConfig): void {
    Vue.filter('numericFormat', (input: number, config: INumericFormatConfig = {}) => {
      return numericFormat(input, { ...baseConfig, ...config });
    });
  },
  version
};
