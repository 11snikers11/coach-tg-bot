const PlayersList = require('./schemas/players.js');
const CurrentPlayDate = require('./schemas/current-play-date.js');

async function addNewPlayer(playerName) {
  const { playDate } = await getCurrentPlayDate();
  const playerList = new PlayersList({ playerName, playDate });
  const isPlayerExists = await PlayersList.exists({ playerName, playDate });
  if (isPlayerExists) return false;
  await playerList.save();
  return true;
}

async function addNewCurrentPlayDate(playDate) {
  await uncheckPreviousPlayDates();
  const currentPlayDate = new CurrentPlayDate({ playDate, currentDate: true });
  await currentPlayDate.save();
}

async function uncheckPreviousPlayDates() {
  await CurrentPlayDate.updateMany({}, { currentDate: false });
}

async function getCurrentPlayDate() {
  return await CurrentPlayDate.findOne({ currentDate: true }).exec();
}
async function getPlayersList(playDate) {
  const playersList = await PlayersList.find({ playDate });
  return playersList.map(player => player.playerName);
}

module.exports = { addNewPlayer, addNewCurrentPlayDate, getCurrentPlayDate, getPlayersList };
