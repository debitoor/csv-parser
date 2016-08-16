var detectDelimiter = require('./lib/detectDelimiter');
var toUtf8 = require('./lib/toUtf8');
var csvParser = require('./lib/csvParser');
var removeEmptyRows = require('./lib/removeEmptyRows');
var trimAllCells = require('./lib/trimAllCells');
var errors = require('nodeerrors');

module.exports = function(buffer, opts) {
	opts = opts || {};
	var bufferUtf8 = toUtf8(buffer);

	var csv = csvParser();
	csv.DELIMITER = detectDelimiter(bufferUtf8);
	csv.DETECT_TYPES = false;
	csv.RELAXED = true;
	var parsed;

	try {
		parsed = csv.parse(bufferUtf8);
	} catch (ex) {
		return {error: errors.system().innerError(ex)};
	}
	
	var rows = removeEmptyRows(parsed);
	if (rows.length < 2) {
		return {error: errors.tooFewRows()};
	}

	trimAllCells(rows);
	return {rows: rows};
};