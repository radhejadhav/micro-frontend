FROM node:20 as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build:w

FROM nginx:latest as prod

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]