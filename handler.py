from aiohttp import web
from bot import send_message

from pydantic import BaseModel

async def hello(request: web.Request):
    return web.Response(text="success")

async def text(request: web.Request):
    await send_message(await request.json())
    return web.Response(text="success")

async def price(request: web.Request):
    class Price(BaseModel):
        symbol: str
        price: float

    class Message(BaseModel):
        uniqueKey: str
        prices: list[Price]
        from_: str

    message = Message(**await request.json())
    formatted_prices = map(lambda x: f"{x.symbol}: ${x.price}", message.prices)
    await send_message('\n'.join(list(formatted_prices)))

    return web.Response(text="success")