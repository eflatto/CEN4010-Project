FROM node:18-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Run Vite dev server instead of building for production
CMD ["npm", "run", "dev", "--", "--host"]
