FROM node:20-alpine
WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY tsconfig.json src ./
RUN pnpm build

CMD node dist/index.js