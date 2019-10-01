import { VueConstructor } from 'vue';
import { version } from '../package.json';
import { INumericFormatConfig, numericFormat } from './filters/numericFormat';

export { numericFormat } from './filters/numericFormat';

export default {
  install(Vue: VueConstructor, baseConfig: INumericFormatConfig): void {
    Vue.filter('numericFormat', (input: number, config: INumericFormatConfig = {}) => {
      return numericFormat(input, { ...baseConfig, ...config });
    });
  },
  version
};
