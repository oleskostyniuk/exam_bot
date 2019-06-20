const TelegramBot = require('node-telegram-bot-api')

const TOKEN  ='824373177:AAHfAo4X9VxXKPcr2_SIu7aNrdZ4b9o8pFA'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg =>{
    bot.sendMessage(msg.chat.id, `Hello from Zeit, bot says: "Hi, ${msg.from.first_name}"`)
})