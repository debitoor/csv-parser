var fs = require('fs');
var path = require('path');
var parser = require('../../.');

describe('csv parser', function() {
	testCsvFile('bank.csv', {rows: [
		['Date', 'Description', 'Amount', 'Saldo'],
		['06-10-2013', '123456789', '-139.00', '16972.00'],
		['05-10-2013', 'Restuarant Fixit', '-3935.00', '17111.00'],
		['04-10-2013', 'Joyride', '-7355.00', '21046.00'],
		['03-10-2013', 'Payment for Invoice 12313', '17500.00', '28401.00'],
		['03-10-2013', 'Some more cool things', '-4125.00', '10901.00'],
		['03-10-2013', '123456789', '-235.00', '15026.00'],
		['02-10-2013', 'Real Coffe', '-235.00', '15261.00'],
		['02-10-2013', 'Equipment Accesoris', '-135.00', '15496.00'],
		['01-10-2013', 'Payment for Invoice 12301', '12500.00', '15631.00'],
		['01-10-2013', 'Material', '-459.00', '3131.00'],
		['01-10-2013', 'Something More', '-635.00', '3590.00']
	]});

	testCsvFile('currency.csv', {rows: [
		['Durchführungsdatum', 'IBAN', 'Empfänger', 'Betrag', 'Verfüger'],
		[ '19.11.2013', 'AT982011182256347600', 'WWV - Group Steuerberatungs GmbH AT104017050666750000', '42,00 EUR', '304627077' ],
		['14.11.2013', 'AT982011182256347600', 'WWV - Group Steuerberatungs GmbH AT104017050666750000', '63,00 EUR', '304627077']
	]});
});

function testCsvFile(filename, expectedOutput) {
	it('should parse ' + filename + ' correctly', function () {
		var buffer = fs.readFileSync(path.resolve('test/data/' + filename));
		var result = parser(buffer);
		expect(result).to.eql(expectedOutput);
	});
}