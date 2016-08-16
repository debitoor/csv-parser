var detectDelimiter = require('../../lib/detectDelimiter');

describe('detectDelimiter.spec.js', function() {

	it('detects , (comma) when there are more commas', function() {
		expect(detectDelimiter(',,,,,,,,,,;;;;;;;;;')).to.equal(',');
	});

	it('detects ; (semi-colon) when there are more semi colons', function() {
		expect(detectDelimiter(',,,,,,,,;;;;;;;;;')).to.equal(';');
	});

	it('detects , (comma) when there are more commas (and other content in string', function() {
		expect(detectDelimiter(',jh;;h,sf,,s\t,,erg,erg,,erg,erg;e;ge;g,eg,er;ge;rg;erg;er;g;\n')).to.equal(',');
	});
});