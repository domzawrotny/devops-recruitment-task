FROM node:latest

# RUN apt-get update
# RUN apt-get -y install net-tools telnet

WORKDIR /usr/src/app

COPY app/ .
RUN npm install 

EXPOSE 3000
CMD npm run start