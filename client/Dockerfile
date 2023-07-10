FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

RUN npm install react-scripts -g --silent

COPY . ./

CMD ["npm", "start"]