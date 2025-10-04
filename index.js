const telegramBot = require("node-telegram-bot-api");
const dotenv = require("dotenv");
const { default: axios } = require("axios");

dotenv.config();

const bot = new telegramBot(process.env.TOKEN, { polling: true });

// bot.on("message", (option) => {
//   console.log(option);
//   bot.sendMessage(option.chat.id, `Hi, ${option.chat.first_name}`);
// });

bot.onText(/\/joke/, async (option)=>{
    const response = await axios.get(
      "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
    );

    // console.log(response?.data?.data?.content)

    bot.sendMessage(
      option.chat.id,
      `Hey ${option.chat.first_name}, \n \nHere is your joke: \n${response?.data?.data?.content}`
    );
})
