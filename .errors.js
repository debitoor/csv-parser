module.exports = {
	system: {
		message: "Internal server error",
		http: 500
	},
	tooFewRows:{
		message: 'The csv has too few rows. Your csv has to have at least two transactions to be parsable',
		http: 400
	}
};