FROM node:13.12.0

WORKDIR /conan-web

COPY ./package*.json ./
COPY ./webpack.config.js ./
COPY ./tsconfig.json ./

RUN npm install

CMD npm run ${NODE_ENV}
