# remove-whitespace

[![Build Status](https://travis-ci.org/javiercejudo/remove-whitespace.svg)](https://travis-ci.org/javiercejudo/remove-whitespace)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/remove-whitespace/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/remove-whitespace?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/remove-whitespace/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/remove-whitespace)

Strip all whitespace from the given string. This is different from
[`String.prototype.trim()`][trim-url] which only removes white spaces from the beginning and
end of a string.

## Installation
```bash
$ npm i --save remove-whitespace
```

## Overview
```js
var removeWhitespace = require('remove-whitespace');

removeWhitespace(' foo  bar  '); // => 'foobar'
removeWhitespace('foo\n bar\n'); // => 'foo\nbar\n'
```

## License
[MIT](https://tldrlegal.com/license/mit-license) ©
[Yoshua Wuyts](http://yoshuawuyts.com)
