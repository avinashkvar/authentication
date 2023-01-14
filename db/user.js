const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
	{
		name: String,
		email: String,
		password: String,
		authType: String,
		githubOAuth: {
			username: String,
		},
	},
	{
		timestamps: true,
	},
);

const UserModel = mongoose.model('user', UserSchema);

module.exports = { UserModel };
