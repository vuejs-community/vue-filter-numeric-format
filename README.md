# vue-filter-numeric-format
Simple numeric filter for Vue.js

## Installation

install from npm
```bash
$ npm install vue-filter-numeric-format
```
and register in you Vue app
```js
import Vue from 'vue';
import VueFilterNumericFormat from 'vue-filter-numeric-format';

Vue.use(VueFilterNumericFormat);
```
or register in you Vue app with config
```js
import Vue from 'vue';
import VueFilterNumericFormat from 'vue-filter-numeric-format';

Vue.use(VueFilterNumericFormat, {
  decimalSeparator: ',',
  fractionDigitsMax: 2,
  fractionDigitsMin: 2,
  fractionDigitsSeparator: '',
  thousandsDigitsSeparator: ' '
});
```

## Usage

basic usage
```html
<template>
  <div>{{ 1000000 | numericFormat }}</div>
</template>
```

usage with config
```html
<template>
  <div>{{ 1000000 | numericFormat(numericFormatConfig) }}</div>
</template>

<script>
  export default {
    data () {
      return {
        numericFormatConfig: {
          decimalSeparator: ',',
          fractionDigitsMax: 2,
          fractionDigitsMin: 2,
          fractionDigitsSeparator: '',
          thousandsDigitsSeparator: ' '
        }
      };
    }
  };
</script>
```

## License

MIT © [Ed Nikolenko](https://github.com/ednikolenko)
