FROM node:lts-alpine

RUN apk add --no-cache git bash \
 && apk add --no-cache python3-dev libxml2-dev libxslt-dev gcc libc-dev \
 && pip3 install --upgrade pip \
 && pip3 install online-judge-tools \
 && yarn global add atcoder-cli
COPY .template/ /root/.config/atcoder-cli-nodejs/typescript/
