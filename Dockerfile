FROM node:24-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node /app

EXPOSE 80

CMD ["npm","run","dev"]
