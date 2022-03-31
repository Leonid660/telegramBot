
const TelegramApi = require('node-telegram-bot-api')

const token = '5295398544:AAFgSmfgtNOaCU9sm4AW_KWmt0Y13BUs0mI'

const bot = new TelegramApi(token, {polling: true})

bot.on('message', nsg => {
    const text = nsg.text;
    const chatId = nsg.chat.id;

    if(text === '/start'){
        bot.sendMessage(chatId, `Добро пожаловать в телеграм бот`)
    }
    if (text === '/info'){
        bot.sendMessage(chatId, `Тебя зовут ${nsg.from.first_name}${nsg.from.last_name}`)
    }

})