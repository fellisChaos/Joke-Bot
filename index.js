const telegramBot = require("node-telegram-bot-api");
const dotenv = require("dotenv");
const { default: axios } = require("axios");

dotenv.config();

const bot = new telegramBot(process.env.TOKEN, { polling: true });

bot.on("message", (option) => {
  console.log(option);
  bot.sendMessage(option.chat.id, `Hi, ${option.chat.first_name}`);
});
