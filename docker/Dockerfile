FROM node:current
MAINTAINER Joziélio Santiago <jozieliosantiago@gmail.com>

COPY /server /home/node

WORKDIR /home/node

RUN yarn global add pm2
RUN yarn

EXPOSE 3333

CMD ["pm2-runtime", "server.js"]
