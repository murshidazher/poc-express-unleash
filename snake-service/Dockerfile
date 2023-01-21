FROM node:18.2.0-alpine

COPY . /app

WORKDIR /app
RUN npm install

CMD [ "node", "index.js" ]
EXPOSE 8080
