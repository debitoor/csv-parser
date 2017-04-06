csv-parser-2 [![Build Status](https://travis-ci.org/debitoor/csv-parser.png?branch=master)](https://travis-ci.org/debitoor/csv-parser)
===

based on rfc4180, extended with popular needs
- automatic delimiter detection
- encoding detection and utf8 conversion
- removing empty rows
- trimming cells


```js
var parser = require('csv-parser-2');

var data = parser(new Buffer('a,b\n1,2'));
console.log(data.rows); // [['a', 'b'],['1', '2']];
```

# options

```js
var parser = require('csv-parser-2');
var options = {
	secondaryDelimiter: true //parse with second most occurring delimiter
};
var data = parser(new Buffer('My, text, with, commas;b\nAnother, text, with, commas;2'), opts);
console.log(data.rows); // [['My, text, with, commas', 'b'],['Another, text, with, commas', '2']];
```