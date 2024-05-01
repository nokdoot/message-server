from dotenv import load_dotenv
load_dotenv()


from aiohttp import web
from bot import start_bot
import handler

app = web.Application()

app.add_routes([
    web.get('/', handler.hello),
    web.post('/text', handler.text),
    web.post('/price', handler.price)
])


if __name__ == "__main__":
    try:
        async def on_startup(app):
            await start_bot() 
        app.on_startup.append(on_startup)

        web.run_app(app, port=7322)
    except RuntimeError as e:
        print(e)