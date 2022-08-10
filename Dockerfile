FROM node:18-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  [ -f package-lock.json ] && npm install || \
  [ -f pnpm-lock.yaml ] && yarn global add pnpm && pnpm install || \
  yarn install

COPY pages ./pages
COPY config ./config
COPY components ./components 
COPY content ./content
COPY lib ./lib
COPY styles ./styles
COPY public ./public
COPY nextjs.config.js .
COPY postcss.config.js .
COPY tailwind.config.js .

CMD yarn dev