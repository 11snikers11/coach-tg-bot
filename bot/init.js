const { Telegraf } = require('telegraf');
const Calendar = require('telegraf-calendar-telegram');
const { calendarConfig } = require('../bot/settings.js');

const hears = require('./actions/hears.js');
const commands = require('./actions/commands.js');
const actions = require('./actions/actions.js');

const BOT_TOKEN = process.env.BOT_TOKEN || '1924043811:AAEkJFCunoVPjKoUubA4hpaR3Dil63Y8iNI';
const bot = new Telegraf(BOT_TOKEN);
const calendar = new Calendar(bot, calendarConfig);

calendar.setDateListener(actions.initNewPlay);
// bot.use(Telegraf.log());
bot.start(commands.startBot);
bot.hears('🖖 Я буду', hears.playerAcceptPlay);
bot.hears('👎 Меня не будет', hears.playerDeclinePlay);
bot.action('hangUp', ctx => actions.hangUp(ctx, calendar));
bot.action('people', actions.showPeople);

module.exports = { bot };
