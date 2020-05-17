FROM node:10.13-alpine

RUN npm install -g create-react-app

ENV NODE_PATH /usr/local/lib/node_modules

WORKDIR /app
