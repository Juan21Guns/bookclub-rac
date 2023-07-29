FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install axios -g --silent
RUN npm install react-scripts

COPY . .

CMD ["npm", "start"]