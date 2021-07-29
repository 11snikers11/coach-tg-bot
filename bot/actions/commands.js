const { coachActions } = require('../settings.js');

function startBot(ctx) {
  ctx.reply('Что будем делать, тренер?', coachActions);
}

module.exports = { startBot };
