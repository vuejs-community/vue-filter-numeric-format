# vue-filter-numeric-format
Simple numeric filter for Vue.js

[![NPM Version](https://img.shields.io/npm/v/vue-filter-numeric-format.svg)](https://www.npmjs.com/package/vue-filter-numeric-format)
[![License](https://img.shields.io/npm/l/vue-filter-numeric-format.svg)](/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/vue-filter-numeric-format.svg)](https://npmcharts.com/compare/vue-filter-numeric-format?minimal=true)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=vuejs-community/vue-filter-numeric-format)](https://dependabot.com)
[![Wallaby.js](https://img.shields.io/badge/wallaby.js-configured-green.svg)](https://wallabyjs.com)

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

MIT © [Vue.js Community](https://github.com/vuejs-community)
