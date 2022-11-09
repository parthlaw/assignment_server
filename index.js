const express = require('express');
const app = express();
const sequelize = require('./sequelize');
const userRoutes = require('./routes/user');
const PORT = 8080;

async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}
}

async function init() {
	await assertDatabaseConnectionOk();
	app.use(express.json());
	app.use('/user', userRoutes);

	app.listen(PORT, () => {
		console.log(`Express server started on port ${PORT}.`);
	});
}

init();