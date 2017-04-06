//returns ',' (comma) or ';' semicolon based on witch one occurs the most times in rawData
module.exports = function detectDelimiter(rawData, opts) {
	var counts = rawData.split('').reduce(function (memo, char) {
		(char in memo) && memo[char]++;
		return memo;
	}, { ',': 0, ';': 0, '\t': 0, '|': 0});
	//return delimiter with biggest count
	return Object.keys(counts).sort(function (a, b) {
		return counts[b] - counts[a];
	})[opts && opts.secondaryDelimiter ? 1 : 0];
};