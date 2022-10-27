FROM node:16.16.0

WORKDIR /frontend

COPY ./ /frontend

RUN yarn add global expo-cli -W

RUN yarn
RUN cd ./mobile && yarn
RUN cd ./web && yarn

RUN cd ./web && yarn build

ARG NEXT_PUBLIC_STAGE=development 
ENV NEXT_PUBLIC_STAGE=${NEXT_PUBLIC_STAGE}

ARG NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://api.saastemplate.io/graphql
ENV NEXT_PUBLIC_GRAPHQL_ENDPOINT=${NEXT_PUBLIC_GRAPHQL_ENDPOINT}

ARG NEXT_PUBLIC_ONESIGNAL_APP_ID=b7e5f0f6-0048-4d09-a537-9a34e5ccf041
ENV NEXT_PUBLIC_ONESIGNAL_APP_ID=${NEXT_PUBLIC_ONESIGNAL_APP_ID}

CMD ["yarn", "web:prod"]

EXPOSE 3413