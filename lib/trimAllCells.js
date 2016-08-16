function trimAllCells(rows){
	rows.forEach(function(row, i){
		rows[i] = row.map(trimCell);
	});
}
function trimCell(cell){
	return cell.replace(/\s+/g, ' ').trim();
}

module.exports = trimAllCells;
trimAllCells.trimCell = trimCell;