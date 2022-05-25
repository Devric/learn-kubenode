FROM node:10-alpine

WORKDIR /app

COPY package.json /app/

RUN npm install

# we install pnpm dependency before we copying, this will reduce repeat if no dependency changed
COPY . .

CMD ["npm", "start"]
