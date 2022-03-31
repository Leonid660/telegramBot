
const TelegramApi = require('node-telegram-bot-api')

const token = '5295398544:AAFgSmfgtNOaCU9sm4AW_KWmt0Y13BUs0mI'

const bot = new TelegramApi(token, {polling: true})

bot.on('message', nsg => {
    
    console.log(nsg)
})