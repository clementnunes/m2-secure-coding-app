FROM node:alpine

WORKDIR /m2-secure-coding-app

COPY package.json .
RUN npm install
COPY . .
RUN npm install -g typescript
RUN tsc
CMD ["node", "./dist/index.js"]
