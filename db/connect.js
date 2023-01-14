const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
require('dotenv').config();
const url = process.env.URL;

async function connect() {
	return new Promise((resolve, reject) => {
		mongoose.connect(url, (err) => {
			if (err) {
				return reject(err);
			}
			return resolve();
		});
	});
}

module.exports = { connect };
