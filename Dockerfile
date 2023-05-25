FROM node:14-alpine
WORKDIR /app
COPY index.js package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD node index.js