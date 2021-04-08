import { Telegraf } from 'telegraf'
import GenerateRandomSentence from './sentence';
import getBotTokenOrQuit from './util/getBotToken';
import axios from 'axios'

async function getJoke() {
    const res = await axios.get('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    console.log(res.data.joke)
    return res.data.joke
}
const botToken = getBotTokenOrQuit();

const bot = new Telegraf(botToken)

bot.start((ctx) => ctx.reply("Hello!  Let's talk!"))
bot.help((ctx) => ctx.reply('Hmm i am not programmed to be helpful, yet!'))
bot.hears('hello', (ctx) => ctx.reply('Ok, I heard you say hello'))
bot.command('sing', (ctx) => ctx.reply('La la la!  I got your command.'))
bot.command('time', (ctx) => ctx.reply(Date()))
bot.command('sentence', (ctx) => ctx.reply(GenerateRandomSentence()))
bot.command('joke', async (ctx) => ctx.reply(await getJoke()))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
