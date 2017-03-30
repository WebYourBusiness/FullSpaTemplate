module.exports = (() => {
	const mongojs = require('mongojs');
	const connectionString = require('../mongodb-text-store.json').mongodbConnection;
	const collections = ['users', 'events'];

	const db = mongojs(connectionString, collections);

	const mongo = {
		api: mongojs,
		db: db
	}

	return mongo;
})();