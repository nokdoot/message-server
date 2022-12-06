FROM node:18-alpine
WORKDIR /app
COPY src src
COPY package-lock.json package-lock.json
COPY package.json package.json

RUN ls -al

RUN npm ci --production