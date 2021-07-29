const telegraf = require('telegraf');
const { Markup } = telegraf;
const calendarConfig = {
  startWeekDay: 1,
  weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  monthNames: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'],
};

const coachActions = Markup.inlineKeyboard([
  Markup.button.callback('🗓 Объявить сбор', 'hangUp'),
  Markup.button.callback('🕺 Кто идёт', 'people'),
]);

const playerActions = Markup.keyboard([['🖖 Я буду', '👎 Меня не будет']])
  .oneTime()
  .resize();

module.exports = { calendarConfig, coachActions, playerActions };
