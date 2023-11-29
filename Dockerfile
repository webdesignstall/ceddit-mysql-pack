FROM node:16-alpine

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./
COPY prisma ./prisma/
COPY . .

RUN npm install --silent

# Install bcrypt
RUN npm install bcrypt

# Exports
EXPOSE 4000

CMD ["npm","start"]
