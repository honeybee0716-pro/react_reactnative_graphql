FROM node:16.16.0

WORKDIR /frontend

COPY ./ /frontend

RUN yarn add global expo-cli -W

RUN yarn
RUN cd ./mobile && yarn
RUN cd ./web && yarn

RUN cd ./web && yarn build

CMD ["yarn", "web:prod"]

EXPOSE 3000