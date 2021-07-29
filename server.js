const { connectToDb } = require('./db/db-connection.js');
const { bot } = require('./bot/init.js');

connectToDb();
bot.startPolling();
