
# Telegram Joke Bot

A simple Telegram bot built with Node.js that sends a random joke when the `/joke` command is used. It fetches jokes from an external API.

---

## Prerequisites

- Node.js (v14 or higher)  
- A Telegram Bot Token from [BotFather](https://t.me/BotFather)

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/telegram-joke-bot.git
cd telegram-joke-bot
````

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a `.env` file in the root directory and add your Telegram bot token:

```env
TOKEN=your_telegram_bot_token_here
```

4. **Run the bot:**

```bash
node index.js
```

---

## Usage

* Open Telegram and search for your bot
* Send `/joke`
* The bot will reply with a random joke
* If there's an error fetching a joke, the bot will respond with a friendly fallback message

---

## API Used

* [FreeAPI Joke Endpoint](https://api.freeapi.app/api/v1/public/randomjokes/joke/random)

---

## Project Structure

```
telegram-joke-bot/
├── index.js         # Main bot logic
├── .env             # Environment variables (not committed)
├── package.json     # Dependencies and scripts
└── README.md        # Project documentation
```

---
