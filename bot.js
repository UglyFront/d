const TelegramBot = require('node-telegram-bot-api')
const { messageTypes } = require('node-telegram-bot-api/src/telegram')

const token = '5276795947:AAHGcjXW3Uce3xSY0i98jVsBZCxyJe4Mxg4'

const bot = new TelegramBot(token, { polling: true })


bot.on('message', (msg) => {

const keyboard = [
  [
    {
      text: 'Сведения об организации', // текст на кнопке
      callback_data: 'sved' // данные для обработчика событий
    },
  ],
  [
    {
      text: 'Лицензия', // текст на кнопке
      callback_data: 'lic' // данные для обработчика событий
    },
  ],
  [
    {
      text: 'Руководоство', // текст на кнопке
      callback_data: 'ruk' // данные для обработчика событий
    },
  ],
  [
    {
      text: 'Пед. состав', // текст на кнопке
      callback_data: 'ped' // данные для обработчика событий
    },
  ],
  [
    {
      text: 'Общежитие', // текст на кнопке
      callback_data: 'ob' // данные для обработчика событий
    },
  ],
  [
    {
      text: 'Устав', // текст на кнопке
      callback_data: 'u' // данные для обработчика событий
    },
  ],
  [
    {
      text: 'Гос. аккредитация', // текст на кнопке
      callback_data: 'a' // данные для обработчика событий
    },
  ],
];

const chatId = msg.chat.id





if (msg.text.length >= 0) {
      bot.sendMessage(chatId, `Привет! Выбери действие!`,  { reply_markup: {inline_keyboard: keyboard}})
}


bot.on('callback_query', msg => {
  console.log(msg.data)
  const chatId = msg.message.chat.id


  if (msg.data == 'sved') {
      bot.sendMessage(chatId, `
Учредитель: Министерство образования Ставропольского края
Юридический адрес: 355003, г. Ставрополь, ул. Л­омоносова, 3
тел. (8652) 37-23-60, 37-23-94 (факс)
e-mail: info@stavminobr.ru
Министр образования Ставропольского края: Козюра Евгений Николаевич
            `,  { reply_markup: { inline_keyboard: keyboard}})
  }

  else if (msg.data == "lic") {
    bot.sendMessage(chatId, `Лицензия: 
http://kov-obr.ru/UserFiles/files/Svetlogr.Files/71.9/2020.pdf`,  { reply_markup: { inline_keyboard: keyboard}})
  }
  else if (msg.data == "ruk") {
    bot.sendMessage(chatId, `Руководство:
http://kov-obr.ru/UserFiles/files/Svetlogr.Files/65.6/15.PDF`,  { reply_markup: { inline_keyboard: keyboard}})
  }
  else if (msg.data == "ped") {
    bot.sendMessage(chatId, `Педагогический состав:
http://kov-obr.ru/UserFiles/files/Svetlogr.Files/65.6/16.PDF`,  { reply_markup: { inline_keyboard: keyboard}})
  }
  else if (msg.data == "ob") {
    bot.sendMessage(chatId, `
Общежитие: http://kov-obr.ru/UserFiles/files/Svetlogr.Files/69.8/18.pdf
Цены на проживание: http://kov-obr.ru/UserFiles/files/Svetlogr.Files/66.4/43.pdf
    `,  { reply_markup: { inline_keyboard: keyboard}})
  }
  else if (msg.data == "u") {
    bot.sendMessage(chatId, `Устав:
http://kov-obr.ru/UserFiles/files/Svetlogr.Files/83/uu.pdf
    `,  { reply_markup: { inline_keyboard: keyboard}})
  }
  else if (msg.data == "a") {
    bot.sendMessage(chatId, `Государственная аккредитация: 
http://kov-obr.ru/UserFiles/files/Svetlogr.Files/72.1/38.pdf
    `,  { reply_markup: { inline_keyboard: keyboard}})
  }
  


  else {
      bot.sendMessage(chatId, `${msg.from.first_name}, я тебя не понял, выбери действие на клавиатуре!`,   { reply_markup: {
inline_keyboard: keyboard}})
  }
})
})



  