FROM python:3
WORKDIR /app

RUN python -m venv ./.venv
ENV PATH="/app/.venv/bin:$PATH"
RUN python -m pip install --upgrade pip


RUN pip install pipreqs
COPY ./*.py ./
RUN pipreqs --ignore .venv/
RUN pip install --no-cache-dir -r requirements.txt

CMD [ "python", "./server.py" ]