FROM node:20-alpine
WORKDIR /app

RUN corepack enable

COPY package.json package.json
RUN pnpm install --fix-lockfile

COPY src src

CMD node src/index.mjs