var allWhitespace = /^\s+$/;
module.exports = function removeEmptyRows(rows){
	return rows.filter(function(row){
		return row.some(function(cell){
			return cell && !allWhitespace.test(cell);
		});
	});
};