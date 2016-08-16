var iconv = require('iconv-lite');
var jschardet = require('jschardet');

module.exports = function toUtf8(buffer){
	var result = jschardet.detect(buffer);
	return result.confidence > 0.5 && iconv.encodingExists(result.encoding) ?
		iconv.decode(buffer, result.encoding) :
		buffer.toString('utf8');
};