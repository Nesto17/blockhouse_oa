# Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install next
RUN npm install

# Copy the rest of the application
COPY . .

# Run Next.js development server
CMD ["npm", "run", "dev"]
