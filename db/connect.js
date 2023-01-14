const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
require('dotenv').config();
const username = encodeURIComponent(process.env.USER_NAME);
const password = encodeURIComponent(process.env.PASSWORD);
async function connect(){
    return new Promise((resolve,reject)=>{
        mongoose.connect(
				`mongodb+srv://${username}:${password}@cluster0.7aune5i.mongodb.net/newproject`,
				(err) => {
					if (err) {
						return reject(err);
					}
					return resolve();
				},
			);
    })
}

module.exports = {connect}