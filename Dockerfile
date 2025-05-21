# Step 1: Use a lightweight Node.js image to build the app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the app code
COPY . .

# Build the app for production
RUN npm run build

EXPOSE 3000

# Start Nginx
CMD ["npm", "run", "dev", "--", "--host"]
