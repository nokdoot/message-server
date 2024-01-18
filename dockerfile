FROM node:20-alpine
WORKDIR /app

RUN corepack enable

COPY pnpm-lock.yaml pnpm-lock.yaml
COPY package.json package.json
RUN pnpm install --frozen-lockfile

COPY src src

CMD node src/index.mjs