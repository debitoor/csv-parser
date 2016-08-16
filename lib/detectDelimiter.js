//returns ',' (comma) or ';' semicolon based on witch one occurs the most times in rawData
module.exports = function detectDelimiter(rawData) {
	var counts = rawData.split('').reduce(function (memo, char) {
		(char in memo) && memo[char]++;
		return memo;
	}, { ',': 0, ';': 0, '\t': 0, '|': 0});
	//return delimiter with biggest count
	return Object.keys(counts).reduce(function (memo, key) {
		if (!memo || (memo.count < counts[key])) {
			return { delimiter: key, count: counts[key] };
		}
		return memo;
	}, null).delimiter;
};