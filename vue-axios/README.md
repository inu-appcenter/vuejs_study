# vue-axios

## 추가 의존성 설치

``` bash
npm i
```

- axios
- babel-polyfill
- es6-promise
- event-source-polyfill
- promise-polyfill
- vue-router
- vue-confetti

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

## todos

- components (confetti, navigation)
- view logic != business logic
- router (history, hashbang, children)
- axios (curl)
- template syntax
