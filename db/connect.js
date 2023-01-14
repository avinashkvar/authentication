const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

async function connect(){
    return new Promise((resolve,reject)=>{
        mongoose.connect('mongodb://127.0.0.1:27017/authentication', (err) => {
				if (err) {
					return reject(err);
				}
				return resolve();
			});
    })
}

module.exports = {connect}