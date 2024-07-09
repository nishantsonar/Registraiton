FROM node:21.2.0

WORKDIR /frontend

COPY public/ /frontend/public
COPY src/ /frontend/src
COPY package.json /frontend/

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]

# docker image build -t frontend:01 .