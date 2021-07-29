const { addNewPlayer } = require("../../db/actions.js");

async function playerAcceptPlay(ctx) {
  const isPlayerAdded = await addNewPlayer(ctx.update.message.from.username);
  if (!isPlayerAdded) {
    ctx.reply(``);
    return;
  }
  ctx.reply(`Окей, ${ctx.update.message.from.username || ctx.update.message.from.first_name}, зафиксировал`);
}

async function playerDeclinePlay(ctx) {
  ctx.reply("Ну ка расскажи, почему");
  ctx.replyWithSticker("CAACAgEAAxkBAAECpxlhAbkFH3TGSLSHB_lb_BlMGFFiOAAC1wADmX-IAvr-r1iqD5PqIAQ");
}

module.exports = { playerAcceptPlay, playerDeclinePlay };
