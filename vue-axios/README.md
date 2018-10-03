# vue-axios

## 추가 의존성 설치

- axios
- babel-polyfill
- es6-promise
- event-source-polyfill
- promise-polyfill

## promise

``` javascript
// webpack.config.js
var path = require('path')
var webpack = require('webpack')
require('es6-promise').polyfill()
```

## polyfill

``` javascript
// main.js
import 'babel-polyfill'
import 'event-source-polyfill'
import 'promise-polyfill/src/polyfill'
```
