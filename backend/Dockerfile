FROM node:16.16.0

WORKDIR /backend

COPY ./ /backend

RUN yarn add global typescript

RUN yarn tsc

CMD ["node", "./dist/src/index.js"]

EXPOSE 8000