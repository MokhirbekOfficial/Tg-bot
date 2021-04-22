
const Token = '1740693896:AAGerJqjw-DuJd0Z-uZXTjb_EpVK-rbyNE4'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(Token, {polling: true})

bot.on('message', (event) =>{
	let mes = event.text
	let chatId = event.chat.id
	let chatName = event.from.first_name
	if (mes === '/start'){
		bot.sendMessage(chatId, 'Salom '+  chatName, {
			reply_markup: {
				keyboard: [['audio']],
				resize_keyboard: true
			}
		})

	}
	if (mes === 'audio'){
		bot.sendVoice(chatId, 'AwACAgIAAxkBAAMUYIHGg6X4R4t3Y-6SsEwGWmyDz_AAAq4NAAI5GxBI2XEBRNhRji0fBA')
	}
	
})

bot.on('voice',(event) => {
	console.log(event)
})


