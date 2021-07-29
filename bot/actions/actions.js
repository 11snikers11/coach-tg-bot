const { playerActions } = require("../settings.js");
const { addNewCurrentPlayDate, getCurrentPlayDate, getPlayersList } = require("../../db/actions.js");

function hangUp(ctx, calendar) {
  const today = new Date();
  const minDate = new Date();
  const maxDate = new Date();
  minDate.setMonth(today.getMonth());
  maxDate.setMonth(today.getMonth() + 1);
  ctx.reply("Окей, выбери дату сбора", calendar.setMinDate(minDate).setMaxDate(maxDate).getCalendar());
}

async function initNewPlay(ctx, date) {
  const { playDate } = await getCurrentPlayDate();
  const checkedDate = new Date(date);
  if (playDate.getTime() == checkedDate.getTime()) {
    ctx.reply(`Нет, тренер, на эту дату ${date} сейчас идёт сбор.`);
    return;
  }
  addNewCurrentPlayDate(date);
  ctx.reply(`Окей, сейчас объявим в общем чате сбор на эту дату ${date}`);
  ctx.telegram.sendMessage("-526061812", `Объявлен сбор на ${date}! Все отмечаемся`, playerActions);
}

async function showPeople(ctx) {
  const { playDate } = await getCurrentPlayDate();
  const playerList = await getPlayersList(playDate);
  let playersString = playerList.map((player, index) => `${index + 1}. ${player}`).join("\n");
  ctx.replyWithHTML(`На ${playDate.toLocaleDateString()} собираются:\n<b>${playersString}</b>`);
}

module.exports = { hangUp, initNewPlay, showPeople };
