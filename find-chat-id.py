from telethon import TelegramClient, events
from env import api_id, api_hash, bot_token, bot_chat_id

bot = TelegramClient('bot', api_id, api_hash)

async def main():
    await bot.start(bot_token=bot_token)

@bot.on(events.NewMessage(chats=None))  # 'chats=None' listens to all chats bot is part of
async def handler(event):
    # Send back the chat's ID (or respond in some way with it)
    chat_id = event.chat_id
    await event.respond(f'Chat ID is: {chat_id}')

async def send_message(message):
    await bot.start(bot_token=bot_token)
    await bot.send_message(bot_chat_id, message)
    await bot.disconnect()

bot.start(bot_token=bot_token)


with bot:
    bot.loop.run_until_complete(send_message('Hello, myself!'))

bot.run_until_disconnected()


