from telethon import TelegramClient
from env import api_id, api_hash, bot_token, bot_chat_id

# Create the client instance but don't start it here
bot = TelegramClient('bot', api_id, api_hash)

async def start_bot():
    await bot.start(bot_token=bot_token)

async def send_message(message):
    await bot.send_message(int(bot_chat_id), str(message), parse_mode='html')
