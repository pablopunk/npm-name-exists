# npm-name-exists

<p align="center">
  <a href="https://travis-ci.org/pablopunk/npm-name-exists"><img src="https://img.shields.io/travis/pablopunk/npm-name-exists.svg" /> </a>
  <a href="https://codecov.io/gh/pablopunk/npm-name-exists"><img src="https://img.shields.io/codecov/c/github/pablopunk/npm-name-exists.svg" /> </a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" /> </a>
  <a href="https://github.com/pablopunk/miny"><img src="https://img.shields.io/badge/made_with-miny-1eced8.svg" /> </a>
  <a href="https://www.npmjs.com/package/npm-name-exists"><img src="https://img.shields.io/npm/dt/npm-name-exists.svg" /></a>
</p>

<p align="center">
  <i>Check if a name exists on npm</i>
</p>

This package is almost identical to [npm-name](https://github.com/sindresorhus/npm-name), but it's very lightweight cause it doesn't use `lodash`.


## Install

```sh
npm install npm-name-exists
```


## Usage

```js
const exists = require('npm-name-exists')
await exists('fs') //=> true
await exists('miny') //=> true
await exists('my-dope-new-package') //=> false
```


## License

MIT


## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100)           |
| --------------------------------- |
| [Pablo Varela](https://pablo.life)   |

